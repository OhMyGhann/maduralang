import {
  Program,
  Statement,
  Expression,
  VariableDeclaration,
  IfStatement,
  ForStatement,
  WhileStatement,
  FunctionDeclaration,
  ReturnStatement,
  TryCatchStatement,
  ThrowStatement,
  BlockStatement,
  ExpressionStatement,
  BinaryExpression,
  UnaryExpression,
  UpdateExpression,
  AssignmentExpression,
  CallExpression,
  MemberExpression,
  ArrayLiteral,
  ObjectLiteral
} from './ast.js';

export interface CodeGenOptions {
  includeRuntime?: boolean;
}

export class CodeGenerator {
  private indentLevel: number = 0;

  public generate(program: Program, options: CodeGenOptions = { includeRuntime: true }): string {
    const lines: string[] = [];

    if (options.includeRuntime) {
      lines.push('// --- MaduraLang Standard Runtime ---');
      lines.push("import * as fs from 'node:fs';");
      lines.push('const kocaaghi = (...args) => console.log(...args);');
      lines.push(`const tanyaaghi = (promptText = '') => {
  if (promptText) process.stdout.write(String(promptText));
  const buf = Buffer.alloc(1024);
  let bytesRead = 0;
  try {
    bytesRead = fs.readSync(0, buf, 0, 1024, null);
  } catch (e) {
    return '';
  }
  return buf.toString('utf8', 0, bytesRead).replace(/\\r?\\n$/, '');
};`);
      lines.push('// ----------------------------------\n');
    }

    for (const stmt of program.body) {
      lines.push(this.generateStatement(stmt));
    }

    return lines.join('\n');
  }

  private indent(): string {
    return '  '.repeat(this.indentLevel);
  }

  private generateStatement(stmt: Statement): string {
    switch (stmt.type) {
      case 'VariableDeclaration':
        return this.generateVariableDeclaration(stmt);
      case 'FunctionDeclaration':
        return this.generateFunctionDeclaration(stmt);
      case 'IfStatement':
        return this.generateIfStatement(stmt);
      case 'ForStatement':
        return this.generateForStatement(stmt);
      case 'WhileStatement':
        return this.generateWhileStatement(stmt);
      case 'BreakStatement':
        return `${this.indent()}break;`;
      case 'ContinueStatement':
        return `${this.indent()}continue;`;
      case 'ReturnStatement':
        return this.generateReturnStatement(stmt);
      case 'TryCatchStatement':
        return this.generateTryCatchStatement(stmt);
      case 'ThrowStatement':
        return `${this.indent()}throw ${this.generateExpression(stmt.argument)};`;
      case 'BlockStatement':
        return this.generateBlockStatement(stmt);
      case 'ExpressionStatement':
        return `${this.indent()}${this.generateExpression(stmt.expression)};`;
      default:
        return '';
    }
  }

  private generateVariableDeclaration(stmt: VariableDeclaration): string {
    const keyword = stmt.kind === 'sango' ? 'let' : 'const';
    if (stmt.init) {
      return `${this.indent()}${keyword} ${stmt.name} = ${this.generateExpression(stmt.init)};`;
    }
    return `${this.indent()}${keyword} ${stmt.name};`;
  }

  private generateFunctionDeclaration(stmt: FunctionDeclaration): string {
    const params = stmt.params.join(', ');
    const header = `${this.indent()}function ${stmt.name}(${params}) `;
    const body = this.generateBlockStatement(stmt.body);
    return `${header}${body.trimStart()}`;
  }

  private generateIfStatement(stmt: IfStatement): string {
    const test = this.generateExpression(stmt.test);
    let code = `${this.indent()}if (${test}) ${this.generateStatement(stmt.consequent).trimStart()}`;

    if (stmt.alternate) {
      if (stmt.alternate.type === 'IfStatement') {
        code += ` else ${this.generateIfStatement(stmt.alternate).trimStart()}`;
      } else {
        code += ` else ${this.generateStatement(stmt.alternate).trimStart()}`;
      }
    }

    return code;
  }

  private generateForStatement(stmt: ForStatement): string {
    let initStr = '';
    if (stmt.init) {
      if (stmt.init.type === 'VariableDeclaration') {
        const keyword = stmt.init.kind === 'sango' ? 'let' : 'const';
        initStr = `${keyword} ${stmt.init.name} = ${stmt.init.init ? this.generateExpression(stmt.init.init) : 'undefined'}`;
      } else {
        initStr = this.generateExpression(stmt.init);
      }
    }

    const testStr = stmt.test ? this.generateExpression(stmt.test) : '';
    const updateStr = stmt.update ? this.generateExpression(stmt.update) : '';

    return `${this.indent()}for (${initStr}; ${testStr}; ${updateStr}) ${this.generateStatement(stmt.body).trimStart()}`;
  }

  private generateWhileStatement(stmt: WhileStatement): string {
    const test = this.generateExpression(stmt.test);
    return `${this.indent()}while (${test}) ${this.generateStatement(stmt.body).trimStart()}`;
  }

  private generateReturnStatement(stmt: ReturnStatement): string {
    if (stmt.argument) {
      return `${this.indent()}return ${this.generateExpression(stmt.argument)};`;
    }
    return `${this.indent()}return;`;
  }

  private generateTryCatchStatement(stmt: TryCatchStatement): string {
    let code = `${this.indent()}try ${this.generateBlockStatement(stmt.block).trimStart()}`;

    if (stmt.handler) {
      code += ` catch (${stmt.handler.param}) ${this.generateBlockStatement(stmt.handler.body).trimStart()}`;
    }

    if (stmt.finalizer) {
      code += ` finally ${this.generateBlockStatement(stmt.finalizer).trimStart()}`;
    }

    return code;
  }

  private generateBlockStatement(stmt: BlockStatement): string {
    const lines: string[] = [`${this.indent()}{`];
    this.indentLevel++;
    for (const s of stmt.body) {
      lines.push(this.generateStatement(s));
    }
    this.indentLevel--;
    lines.push(`${this.indent()}}`);
    return lines.join('\n');
  }

  private generateExpression(expr: Expression): string {
    switch (expr.type) {
      case 'NumberLiteral':
        return String(expr.value);
      case 'StringLiteral':
        return JSON.stringify(expr.value);
      case 'BooleanLiteral':
        return expr.value ? 'true' : 'false';
      case 'NullLiteral':
        return 'null';
      case 'UndefinedLiteral':
        return 'undefined';
      case 'Identifier':
        return expr.name;
      case 'BinaryExpression':
        return `(${this.generateExpression(expr.left)} ${expr.operator} ${this.generateExpression(expr.right)})`;
      case 'UnaryExpression':
        return `${expr.operator}(${this.generateExpression(expr.argument)})`;
      case 'UpdateExpression':
        if (expr.prefix) {
          return `${expr.operator}${expr.argument.name}`;
        }
        return `${expr.argument.name}${expr.operator}`;
      case 'AssignmentExpression':
        return `${this.generateExpression(expr.left)} ${expr.operator} ${this.generateExpression(expr.right)}`;
      case 'CallExpression':
        const args = expr.arguments.map(a => this.generateExpression(a)).join(', ');
        return `${this.generateExpression(expr.callee)}(${args})`;
      case 'MemberExpression':
        if (expr.computed) {
          return `${this.generateExpression(expr.object)}[${this.generateExpression(expr.property)}]`;
        }
        return `${this.generateExpression(expr.object)}.${(expr.property as any).name}`;
      case 'ArrayLiteral':
        return `[${expr.elements.map(e => this.generateExpression(e)).join(', ')}]`;
      case 'ObjectLiteral':
        const props = expr.properties.map(p => `${p.key}: ${this.generateExpression(p.value)}`).join(', ');
        return `{ ${props} }`;
      default:
        return '';
    }
  }
}
