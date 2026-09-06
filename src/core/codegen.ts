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
  ObjectLiteral,
  ClassDeclaration,
  SwitchStatement,
  ImportDeclaration,
  ExportDeclaration,
  ConditionalExpression,
  TemplateLiteral,
  ArrowFunctionExpression,
  NewExpression,
  ThisExpression,
  AwaitExpression
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
      case 'ClassDeclaration':
        return this.generateClassDeclaration(stmt);
      case 'SwitchStatement':
        return this.generateSwitchStatement(stmt);
      case 'ImportDeclaration':
        return this.generateImportDeclaration(stmt);
      case 'ExportDeclaration':
        return this.generateExportDeclaration(stmt);
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
    const asyncPrefix = stmt.isAsync ? 'async ' : '';
    const params = stmt.params.join(', ');
    const header = `${this.indent()}${asyncPrefix}function ${stmt.name}(${params}) `;
    const body = this.generateBlockStatement(stmt.body);
    return `${header}${body.trimStart()}`;
  }

  private generateClassDeclaration(stmt: ClassDeclaration): string {
    const extendsClause = stmt.superClass ? ` extends ${stmt.superClass.name}` : '';
    const lines: string[] = [`${this.indent()}class ${stmt.name}${extendsClause} {`];
    this.indentLevel++;

    if (stmt.constructorMethod) {
      const params = stmt.constructorMethod.params.join(', ');
      const header = `${this.indent()}constructor(${params}) {`;
      lines.push(header);
      this.indentLevel++;
      if (stmt.superClass) {
        lines.push(`${this.indent()}super();`);
      }
      for (const s of stmt.constructorMethod.body.body) {
        lines.push(this.generateStatement(s));
      }
      this.indentLevel--;
      lines.push(`${this.indent()}}`);
    }

    for (const method of stmt.methods) {
      const asyncPrefix = method.isAsync ? 'async ' : '';
      const params = method.params.join(', ');
      const header = `${this.indent()}${asyncPrefix}${method.name}(${params}) `;
      const body = this.generateBlockStatement(method.body);
      lines.push(`${header}${body.trimStart()}`);
    }

    this.indentLevel--;
    lines.push(`${this.indent()}}`);
    return lines.join('\n');
  }

  private generateSwitchStatement(stmt: SwitchStatement): string {
    const lines: string[] = [`${this.indent()}switch (${this.generateExpression(stmt.discriminant)}) {`];
    this.indentLevel++;

    for (const c of stmt.cases) {
      if (c.test) {
        lines.push(`${this.indent()}case ${this.generateExpression(c.test)}:`);
      } else {
        lines.push(`${this.indent()}default:`);
      }
      this.indentLevel++;
      for (const s of c.consequent) {
        lines.push(this.generateStatement(s));
      }
      this.indentLevel--;
    }

    this.indentLevel--;
    lines.push(`${this.indent()}}`);
    return lines.join('\n');
  }

  private generateImportDeclaration(stmt: ImportDeclaration): string {
    const parts: string[] = [];
    if (stmt.defaultSpecifier) {
      parts.push(stmt.defaultSpecifier);
    }
    if (stmt.specifiers.length > 0) {
      const specList = stmt.specifiers
        .map(s => (s.imported === s.local ? s.imported : `${s.imported} as ${s.local}`))
        .join(', ');
      parts.push(`{ ${specList} }`);
    }

    let source = stmt.source;
    if (source === 'madura/wilayah') {
      source = '@ohmyghann/maduralang/wilayah';
    } else if (source === 'madura/stdlib' || source === 'madura') {
      source = '@ohmyghann/maduralang/stdlib';
    }

    return `${this.indent()}import ${parts.join(', ')} from ${JSON.stringify(source)};`;
  }

  private generateExportDeclaration(stmt: ExportDeclaration): string {
    if (stmt.isDefault && stmt.declaration) {
      if (stmt.declaration.type === 'ExpressionStatement') {
        return `${this.indent()}export default ${this.generateExpression(stmt.declaration.expression)};`;
      }
      return `${this.indent()}export default ${this.generateStatement(stmt.declaration).trimStart()}`;
    }
    if (stmt.declaration) {
      return `${this.indent()}export ${this.generateStatement(stmt.declaration).trimStart()}`;
    }
    return '';
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
      case 'ThisExpression':
        return 'this';
      case 'NewExpression':
        const newArgs = expr.arguments.map(a => this.generateExpression(a)).join(', ');
        return `new ${this.generateExpression(expr.callee)}(${newArgs})`;
      case 'AwaitExpression':
        return `(await ${this.generateExpression(expr.argument)})`;
      case 'ConditionalExpression':
        return `(${this.generateExpression(expr.test)} ? ${this.generateExpression(expr.consequent)} : ${this.generateExpression(expr.alternate)})`;
      case 'ArrowFunctionExpression': {
        const asyncPrefix = expr.isAsync ? 'async ' : '';
        const params = expr.params.join(', ');
        let bodyCode: string;
        if (expr.body.type === 'BlockStatement') {
          bodyCode = this.generateBlockStatement(expr.body).trimStart();
        } else {
          bodyCode = this.generateExpression(expr.body);
        }
        return `${asyncPrefix}(${params}) => ${bodyCode}`;
      }
      case 'TemplateLiteral': {
        let result = '`';
        for (let i = 0; i < expr.quasis.length; i++) {
          result += expr.quasis[i];
          if (i < expr.expressions.length) {
            result += `\${${this.generateExpression(expr.expressions[i])}}`;
          }
        }
        result += '`';
        return result;
      }
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
