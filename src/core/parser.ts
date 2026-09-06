import { Token, TokenType } from './tokens.js';
import { Lexer } from './lexer.js';
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
  BreakStatement,
  ContinueStatement,
  Identifier,
  ClassDeclaration,
  ClassMethod,
  ConstructorMethod,
  SwitchStatement,
  SwitchCase,
  ImportDeclaration,
  ExportDeclaration,
  ImportSpecifier,
  ConditionalExpression,
  TemplateLiteral,
  ArrowFunctionExpression,
  NewExpression,
  ThisExpression,
  AwaitExpression
} from './ast.js';

export class Parser {
  private tokens: Token[];
  private current: number = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  public parse(): Program {
    const body: Statement[] = [];

    while (!this.isAtEnd()) {
      // Optional stray semicolons
      if (this.match(TokenType.SEMICOLON)) {
        continue;
      }
      body.push(this.statement());
    }

    return {
      type: 'Program',
      body
    };
  }

  private statement(): Statement {
    // Modules
    if (this.match(TokenType.NGALA)) {
      return this.importDeclaration();
    }
    if (this.match(TokenType.BAGHI)) {
      return this.exportDeclaration();
    }

    // OOP / Class
    if (this.match(TokenType.BHANGSA)) {
      return this.classDeclaration();
    }

    // Switch
    if (this.match(TokenType.PILIH)) {
      return this.switchStatement();
    }

    // Async function
    if (this.match(TokenType.NYAMBI)) {
      if (this.match(TokenType.LAKONA)) {
        return this.functionDeclaration(true);
      } else {
        // backtrack if not function
        this.current--;
      }
    }

    if (this.match(TokenType.SANGO)) {
      return this.variableDeclaration('sango');
    }
    if (this.match(TokenType.PAGGUN)) {
      return this.variableDeclaration('paggun');
    }
    if (this.match(TokenType.LAKONA)) {
      return this.functionDeclaration(false);
    }
    if (this.match(TokenType.LAMON)) {
      return this.ifStatement();
    }
    if (this.match(TokenType.POTER)) {
      return this.forStatement();
    }
    if (this.match(TokenType.SAMPEK)) {
      return this.whileStatement();
    }
    if (this.match(TokenType.AMBU)) {
      this.consumeSemicolon();
      return { type: 'BreakStatement' };
    }
    if (this.match(TokenType.TERROS)) {
      this.consumeSemicolon();
      return { type: 'ContinueStatement' };
    }
    if (this.match(TokenType.PABALI)) {
      return this.returnStatement();
    }
    if (this.match(TokenType.JHE_SOSSA)) {
      return this.tryCatchStatement();
    }
    if (this.match(TokenType.NGAMOK)) {
      return this.throwStatement();
    }
    if (this.check(TokenType.LBRACE)) {
      return this.blockStatement();
    }

    return this.expressionStatement();
  }

  private importDeclaration(): ImportDeclaration {
    const specifiers: ImportSpecifier[] = [];
    let defaultSpecifier: string | undefined = undefined;

    if (this.match(TokenType.LBRACE)) {
      if (!this.check(TokenType.RBRACE)) {
        do {
          const name = this.advance().value;
          specifiers.push({ imported: name, local: name });
        } while (this.match(TokenType.COMMA));
      }
      this.consume(TokenType.RBRACE, "Koddhuna '}' saamponna dhaptar import");
    } else if (!this.check(TokenType.DHARI)) {
      defaultSpecifier = this.advance().value;
    }

    this.consume(TokenType.DHARI, "Koddhuna 'dhari' saamponna dhaptar import");
    const sourceToken = this.consume(TokenType.STRING, "Koddhuna lokasi modul (string)");
    this.consumeSemicolon();

    return {
      type: 'ImportDeclaration',
      specifiers,
      defaultSpecifier,
      source: sourceToken.value
    };
  }

  private exportDeclaration(): ExportDeclaration {
    if (this.match(TokenType.BAWAAN)) {
      const expr = this.expression();
      this.consumeSemicolon();
      return {
        type: 'ExportDeclaration',
        isDefault: true,
        declaration: {
          type: 'ExpressionStatement',
          expression: expr
        }
      };
    }

    const decl = this.statement();
    return {
      type: 'ExportDeclaration',
      declaration: decl,
      isDefault: false
    };
  }

  private classDeclaration(): ClassDeclaration {
    const nameToken = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama bhângsa (kelas)");
    let superClass: Identifier | undefined = undefined;

    if (this.match(TokenType.KATORONAN)) {
      const superToken = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama kelas induk saamponna 'katoronan'");
      superClass = { type: 'Identifier', name: superToken.value };
    }

    this.consume(TokenType.LBRACE, "Koddhuna '{' neng pamokka' definisi bhângsa");

    let constructorMethod: ConstructorMethod | undefined = undefined;
    const methods: ClassMethod[] = [];

    while (!this.check(TokenType.RBRACE) && !this.isAtEnd()) {
      if (this.match(TokenType.SEMICOLON)) continue;

      // Constructor: nyiptaaghi(...) { ... }
      if (this.match(TokenType.NYIPTAAGHI)) {
        this.consume(TokenType.LPAREN, "Koddhuna '(' saamponna 'nyiptaaghi'");
        const params: string[] = [];
        if (!this.check(TokenType.RPAREN)) {
          do {
            params.push(this.consume(TokenType.IDENTIFIER, "Koddhuna nyama parameter").value);
          } while (this.match(TokenType.COMMA));
        }
        this.consume(TokenType.RPAREN, "Koddhuna ')'");
        const body = this.blockStatement();
        constructorMethod = { type: 'ConstructorMethod', params, body };
        continue;
      }

      // Methods
      let isAsync = false;
      if (this.match(TokenType.NYAMBI)) {
        isAsync = true;
      }
      this.match(TokenType.LAKONA);

      const methodName = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama lakona (method) neng dhalem bhângsa");
      this.consume(TokenType.LPAREN, "Koddhuna '(' saamponna nyama method");
      const params: string[] = [];
      if (!this.check(TokenType.RPAREN)) {
        do {
          params.push(this.consume(TokenType.IDENTIFIER, "Koddhuna nyama parameter").value);
        } while (this.match(TokenType.COMMA));
      }
      this.consume(TokenType.RPAREN, "Koddhuna ')'");
      const body = this.blockStatement();
      methods.push({
        type: 'ClassMethod',
        name: methodName.value,
        params,
        body,
        isAsync
      });
    }

    this.consume(TokenType.RBRACE, "Koddhuna '}' neng panotop bhângsa");

    return {
      type: 'ClassDeclaration',
      name: nameToken.value,
      superClass,
      constructorMethod,
      methods
    };
  }

  private switchStatement(): SwitchStatement {
    this.consume(TokenType.LPAREN, "Koddhuna '(' saamponna 'pilih'");
    const discriminant = this.expression();
    this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna kondisi 'pilih'");

    this.consume(TokenType.LBRACE, "Koddhuna '{' neng pamokka' blok 'pilih'");
    const cases: SwitchCase[] = [];

    while (!this.check(TokenType.RBRACE) && !this.isAtEnd()) {
      if (this.match(TokenType.KADHADHIYAN)) {
        const test = this.expression();
        this.consume(TokenType.COLON, "Koddhuna ':' saamponna nilai 'kadhadhiyan'");
        const consequent: Statement[] = [];
        while (
          !this.check(TokenType.KADHADHIYAN) &&
          !this.check(TokenType.BAWAAN) &&
          !this.check(TokenType.RBRACE) &&
          !this.isAtEnd()
        ) {
          consequent.push(this.statement());
        }
        cases.push({ type: 'SwitchCase', test, consequent });
      } else if (this.match(TokenType.BAWAAN)) {
        this.consume(TokenType.COLON, "Koddhuna ':' saamponna 'bawaan'");
        const consequent: Statement[] = [];
        while (
          !this.check(TokenType.KADHADHIYAN) &&
          !this.check(TokenType.BAWAAN) &&
          !this.check(TokenType.RBRACE) &&
          !this.isAtEnd()
        ) {
          consequent.push(this.statement());
        }
        cases.push({ type: 'SwitchCase', test: null, consequent });
      } else {
        throw new Error(`[MaduraLang Sala] Koddhuna 'kadhadhiyan' otaba 'bawaan' neng dhalem 'pilih' (baris ${this.peek().line})`);
      }
    }

    this.consume(TokenType.RBRACE, "Koddhuna '}' neng panotop blok 'pilih'");

    return {
      type: 'SwitchStatement',
      discriminant,
      cases
    };
  }

  private variableDeclaration(kind: 'sango' | 'paggun'): VariableDeclaration {
    const nameToken = this.consume(TokenType.IDENTIFIER, `Koddhuna nyama variabel saamponna '${kind}'`);
    let init: Expression | undefined = undefined;

    if (this.match(TokenType.ASSIGN)) {
      init = this.expression();
    }

    this.consumeSemicolon();

    return {
      type: 'VariableDeclaration',
      kind,
      name: nameToken.value,
      init,
      line: nameToken.line,
      column: nameToken.column
    };
  }

  private functionDeclaration(isAsync: boolean = false): FunctionDeclaration {
    const nameToken = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama lakona (fungsi) saamponna 'lakona'");
    this.consume(TokenType.LPAREN, "Koddhuna '(' saamponna nyama lakona");

    const params: string[] = [];
    if (!this.check(TokenType.RPAREN)) {
      do {
        const param = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama parameter");
        params.push(param.value);
      } while (this.match(TokenType.COMMA));
    }

    this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna dhaptar parameter");
    const body = this.blockStatement();

    return {
      type: 'FunctionDeclaration',
      name: nameToken.value,
      params,
      body,
      isAsync,
      line: nameToken.line,
      column: nameToken.column
    };
  }

  private ifStatement(): IfStatement {
    this.consume(TokenType.LPAREN, "Koddhuna '(' saamponna 'lamon'");
    const test = this.expression();
    this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna sarat 'lamon'");

    const consequent = this.blockStatement();
    let alternate: Statement | undefined = undefined;

    if (this.match(TokenType.LAMON_ENJA)) {
      alternate = this.ifStatement();
    } else if (this.match(TokenType.LAEN)) {
      if (this.match(TokenType.LAMON)) {
        alternate = this.ifStatement();
      } else {
        alternate = this.blockStatement();
      }
    }

    return {
      type: 'IfStatement',
      test,
      consequent,
      alternate
    };
  }

  private forStatement(): ForStatement {
    this.consume(TokenType.LPAREN, "Koddhuna '(' saamponna 'poter'");

    let init: VariableDeclaration | Expression | null = null;
    if (this.match(TokenType.SEMICOLON)) {
      init = null;
    } else if (this.match(TokenType.SANGO)) {
      init = this.variableDeclaration('sango');
    } else {
      init = this.expression();
      this.consume(TokenType.SEMICOLON, "Koddhuna ';' saamponna inisialisasi 'poter'");
    }

    let test: Expression | null = null;
    if (!this.check(TokenType.SEMICOLON)) {
      test = this.expression();
    }
    this.consume(TokenType.SEMICOLON, "Koddhuna ';' saamponna sarat 'poter'");

    let update: Expression | null = null;
    if (!this.check(TokenType.RPAREN)) {
      update = this.expression();
    }
    this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna panantowan 'poter'");

    const body = this.blockStatement();

    return {
      type: 'ForStatement',
      init,
      test,
      update,
      body
    };
  }

  private whileStatement(): WhileStatement {
    this.consume(TokenType.LPAREN, "Koddhuna '(' saamponna 'sampek'");
    const test = this.expression();
    this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna sarat 'sampek'");

    const body = this.blockStatement();

    return {
      type: 'WhileStatement',
      test,
      body
    };
  }

  private returnStatement(): ReturnStatement {
    let argument: Expression | undefined = undefined;
    if (!this.check(TokenType.SEMICOLON) && !this.check(TokenType.RBRACE)) {
      argument = this.expression();
    }
    this.consumeSemicolon();
    return {
      type: 'ReturnStatement',
      argument
    };
  }

  private tryCatchStatement(): TryCatchStatement {
    const block = this.blockStatement();
    let handler: { param: string; body: BlockStatement } | undefined = undefined;

    if (this.match(TokenType.NGARTE)) {
      let param = 'err';
      if (this.match(TokenType.LPAREN)) {
        const paramToken = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama variabel sala neng dhalem '(' ngarte");
        param = paramToken.value;
        this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna param ngarte");
      }
      const catchBlock = this.blockStatement();
      handler = { param, body: catchBlock };
    }

    let finalizer: BlockStatement | undefined = undefined;
    if (this.match(TokenType.TOTOP)) {
      finalizer = this.blockStatement();
    }

    return {
      type: 'TryCatchStatement',
      block,
      handler,
      finalizer
    };
  }

  private throwStatement(): ThrowStatement {
    const argument = this.expression();
    this.consumeSemicolon();
    return {
      type: 'ThrowStatement',
      argument
    };
  }

  private blockStatement(): BlockStatement {
    this.consume(TokenType.LBRACE, "Koddhuna '{' neng pamokka' blok");
    const body: Statement[] = [];

    while (!this.check(TokenType.RBRACE) && !this.isAtEnd()) {
      if (this.match(TokenType.SEMICOLON)) continue;
      body.push(this.statement());
    }

    this.consume(TokenType.RBRACE, "Koddhuna '}' neng panotop blok");
    return {
      type: 'BlockStatement',
      body
    };
  }

  private expressionStatement(): ExpressionStatement {
    const expr = this.expression();
    this.consumeSemicolon();
    return {
      type: 'ExpressionStatement',
      expression: expr
    };
  }

  // --- Expressions ---

  public expression(): Expression {
    return this.assignment();
  }

  private assignment(): Expression {
    const expr = this.ternary();

    if (
      this.match(TokenType.ASSIGN) ||
      this.match(TokenType.PLUS_ASSIGN) ||
      this.match(TokenType.MINUS_ASSIGN)
    ) {
      const operator = this.previous().value;
      const value = this.assignment();

      return {
        type: 'AssignmentExpression',
        operator,
        left: expr,
        right: value
      };
    }

    return expr;
  }

  private ternary(): Expression {
    const expr = this.logicalOr();

    if (this.match(TokenType.QUESTION)) {
      const consequent = this.expression();
      this.consume(TokenType.COLON, "Koddhuna ':' neng dhalem ekspresi ternary");
      const alternate = this.expression();

      return {
        type: 'ConditionalExpression',
        test: expr,
        consequent,
        alternate
      };
    }

    return expr;
  }

  private logicalOr(): Expression {
    let expr = this.logicalAnd();

    while (this.match(TokenType.OTABA)) {
      const operator = '||';
      const right = this.logicalAnd();
      expr = {
        type: 'BinaryExpression',
        operator,
        left: expr,
        right
      };
    }

    return expr;
  }

  private logicalAnd(): Expression {
    let expr = this.equality();

    while (this.match(TokenType.BAN)) {
      const operator = '&&';
      const right = this.equality();
      expr = {
        type: 'BinaryExpression',
        operator,
        left: expr,
        right
      };
    }

    return expr;
  }

  private equality(): Expression {
    let expr = this.comparison();

    while (
      this.match(TokenType.EQ) ||
      this.match(TokenType.NOT_EQ) ||
      this.match(TokenType.STRICT_EQ) ||
      this.match(TokenType.STRICT_NOT_EQ)
    ) {
      const operator = this.previous().value;
      const right = this.comparison();
      expr = {
        type: 'BinaryExpression',
        operator,
        left: expr,
        right
      };
    }

    return expr;
  }

  private comparison(): Expression {
    let expr = this.additive();

    while (
      this.match(TokenType.LT) ||
      this.match(TokenType.LTE) ||
      this.match(TokenType.GT) ||
      this.match(TokenType.GTE)
    ) {
      const operator = this.previous().value;
      const right = this.additive();
      expr = {
        type: 'BinaryExpression',
        operator,
        left: expr,
        right
      };
    }

    return expr;
  }

  private additive(): Expression {
    let expr = this.multiplicative();

    while (this.match(TokenType.PLUS) || this.match(TokenType.MINUS)) {
      const operator = this.previous().value;
      const right = this.multiplicative();
      expr = {
        type: 'BinaryExpression',
        operator,
        left: expr,
        right
      };
    }

    return expr;
  }

  private multiplicative(): Expression {
    let expr = this.unary();

    while (
      this.match(TokenType.STAR) ||
      this.match(TokenType.SLASH) ||
      this.match(TokenType.MODULO)
    ) {
      const operator = this.previous().value;
      const right = this.unary();
      expr = {
        type: 'BinaryExpression',
        operator,
        left: expr,
        right
      };
    }

    return expr;
  }

  private unary(): Expression {
    if (this.match(TokenType.ANTOSE)) {
      return {
        type: 'AwaitExpression',
        argument: this.unary()
      };
    }

    if (this.match(TokenType.BENNE)) {
      return {
        type: 'UnaryExpression',
        operator: '!',
        argument: this.unary(),
        prefix: true
      };
    }

    if (this.match(TokenType.MINUS)) {
      return {
        type: 'UnaryExpression',
        operator: '-',
        argument: this.unary(),
        prefix: true
      };
    }

    if (this.match(TokenType.PLUS_PLUS) || this.match(TokenType.MINUS_MINUS)) {
      const operator = this.previous().value as '++' | '--';
      const operand = this.unary();
      if (operand.type !== 'Identifier') {
        throw new Error(`[MaduraLang Sala] '${operator}' coma kenging e-angghuy ka variabel`);
      }
      return {
        type: 'UpdateExpression',
        operator,
        argument: operand as Identifier,
        prefix: true
      };
    }

    return this.postfix();
  }

  private postfix(): Expression {
    let expr = this.callOrMember();

    if (this.match(TokenType.PLUS_PLUS) || this.match(TokenType.MINUS_MINUS)) {
      const operator = this.previous().value as '++' | '--';
      if (expr.type !== 'Identifier') {
        throw new Error(`[MaduraLang Sala] '${operator}' coma kenging e-angghuy ka variabel`);
      }
      return {
        type: 'UpdateExpression',
        operator,
        argument: expr as Identifier,
        prefix: false
      };
    }

    return expr;
  }

  private callOrMember(): Expression {
    let expr = this.primary();

    while (true) {
      if (this.match(TokenType.LPAREN)) {
        // Function call
        const args: Expression[] = [];
        if (!this.check(TokenType.RPAREN)) {
          do {
            args.push(this.expression());
          } while (this.match(TokenType.COMMA));
        }
        this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna argumen fungsi");
        expr = {
          type: 'CallExpression',
          callee: expr,
          arguments: args
        };
      } else if (this.match(TokenType.DOT)) {
        // Member dot access: obj.prop
        const propToken = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama properti saamponna '.'");
        expr = {
          type: 'MemberExpression',
          object: expr,
          property: {
            type: 'Identifier',
            name: propToken.value
          },
          computed: false
        };
      } else if (this.match(TokenType.LBRACKET)) {
        // Computed index access: obj[expr]
        const prop = this.expression();
        this.consume(TokenType.RBRACKET, "Koddhuna ']' saamponna indeks properti");
        expr = {
          type: 'MemberExpression',
          object: expr,
          property: prop,
          computed: true
        };
      } else {
        break;
      }
    }

    return expr;
  }

  private primary(): Expression {
    // OOP 'anyar' (new)
    if (this.match(TokenType.ANYAR)) {
      const callee = this.callOrMember();
      if (callee.type === 'CallExpression') {
        return {
          type: 'NewExpression',
          callee: callee.callee,
          arguments: callee.arguments
        };
      }
      return {
        type: 'NewExpression',
        callee,
        arguments: []
      };
    }

    // OOP 'dibi'' (this)
    if (this.match(TokenType.DIBI)) {
      return {
        type: 'ThisExpression'
      };
    }

    // Async arrow function: nyambi (...) => ... or nyambi x => ...
    if (this.match(TokenType.NYAMBI)) {
      return this.arrowFunction(true);
    }

    if (this.match(TokenType.NUMBER)) {
      return {
        type: 'NumberLiteral',
        value: parseFloat(this.previous().value)
      };
    }

    if (this.match(TokenType.STRING)) {
      return {
        type: 'StringLiteral',
        value: this.previous().value
      };
    }

    if (this.match(TokenType.TEMPLATE_STRING)) {
      return this.parseTemplateString(this.previous().value);
    }

    if (this.match(TokenType.BHENDER)) {
      return {
        type: 'BooleanLiteral',
        value: true
      };
    }

    if (this.match(TokenType.SALA)) {
      return {
        type: 'BooleanLiteral',
        value: false
      };
    }

    if (this.match(TokenType.TADHE)) {
      return {
        type: 'NullLiteral'
      };
    }

    if (this.match(TokenType.TA_TAO)) {
      return {
        type: 'UndefinedLiteral'
      };
    }

    // Built-in output/input treated as identifiers
    if (this.match(TokenType.KOCAAGHI)) {
      return {
        type: 'Identifier',
        name: 'kocaaghi'
      };
    }

    if (this.match(TokenType.TANYAAGHI)) {
      return {
        type: 'Identifier',
        name: 'tanyaaghi'
      };
    }

    if (this.match(TokenType.IDENTIFIER)) {
      const idName = this.previous().value;
      // Check single-param arrow function: x => ...
      if (this.match(TokenType.ARROW)) {
        const body = this.check(TokenType.LBRACE) ? this.blockStatement() : this.expression();
        return {
          type: 'ArrowFunctionExpression',
          params: [idName],
          body,
          isAsync: false
        };
      }
      return {
        type: 'Identifier',
        name: idName
      };
    }

    // Array literal: [1, 2, 3]
    if (this.match(TokenType.LBRACKET)) {
      const elements: Expression[] = [];
      if (!this.check(TokenType.RBRACKET)) {
        do {
          elements.push(this.expression());
        } while (this.match(TokenType.COMMA));
      }
      this.consume(TokenType.RBRACKET, "Koddhuna ']' neng panotop array");
      return {
        type: 'ArrayLiteral',
        elements
      };
    }

    // Object literal: { a: 1, b: 2 }
    if (this.match(TokenType.LBRACE)) {
      const properties: { key: string; value: Expression }[] = [];
      if (!this.check(TokenType.RBRACE)) {
        do {
          let key: string;
          if (this.match(TokenType.IDENTIFIER) || this.match(TokenType.STRING)) {
            key = this.previous().value;
          } else {
            throw new Error(`[MaduraLang Sala] Koddhuna kunci objek (identifier otaba string) neng baris ${this.peek().line}`);
          }
          this.consume(TokenType.COLON, "Koddhuna ':' saamponna kunci objek");
          const value = this.expression();
          properties.push({ key, value });
        } while (this.match(TokenType.COMMA));
      }
      this.consume(TokenType.RBRACE, "Koddhuna '}' neng panotop objek");
      return {
        type: 'ObjectLiteral',
        properties
      };
    }

    // Grouping (expr) OR Arrow Function (a, b) => ...
    if (this.check(TokenType.LPAREN)) {
      if (this.isArrowFunctionAhead()) {
        return this.arrowFunction(false);
      }
      this.advance(); // consume '('
      const expr = this.expression();
      this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna ekspresi neng dhalem kurung");
      return expr;
    }

    const token = this.peek();
    throw new Error(
      `[MaduraLang Sala] Sintaks ta' e-kennal '${token.value || token.type}' neng baris ${token.line}, kolom ${token.column}`
    );
  }

  private isArrowFunctionAhead(): boolean {
    if (this.peek().type !== TokenType.LPAREN) return false;
    let i = this.current + 1; // mulai setelah '('

    // Check empty params: () =>
    if (this.tokens[i]?.type === TokenType.RPAREN && this.tokens[i + 1]?.type === TokenType.ARROW) {
      return true;
    }

    // Check param list: id, id, ... ) =>
    while (i < this.tokens.length && this.tokens[i].type !== TokenType.RPAREN && this.tokens[i].type !== TokenType.EOF) {
      if (this.tokens[i].type !== TokenType.IDENTIFIER && this.tokens[i].type !== TokenType.COMMA) {
        return false;
      }
      i++;
    }

    if (this.tokens[i]?.type === TokenType.RPAREN && this.tokens[i + 1]?.type === TokenType.ARROW) {
      return true;
    }

    return false;
  }

  private arrowFunction(isAsync: boolean): ArrowFunctionExpression {
    const params: string[] = [];

    if (this.match(TokenType.LPAREN)) {
      if (!this.check(TokenType.RPAREN)) {
        do {
          params.push(this.consume(TokenType.IDENTIFIER, "Koddhuna parameter arrow function").value);
        } while (this.match(TokenType.COMMA));
      }
      this.consume(TokenType.RPAREN, "Koddhuna ')'");
    } else if (this.match(TokenType.IDENTIFIER)) {
      params.push(this.previous().value);
    }

    this.consume(TokenType.ARROW, "Koddhuna '=>' neng arrow function");

    let body: BlockStatement | Expression;
    if (this.check(TokenType.LBRACE)) {
      body = this.blockStatement();
    } else {
      body = this.expression();
    }

    return {
      type: 'ArrowFunctionExpression',
      params,
      body,
      isAsync
    };
  }

  private parseTemplateString(raw: string): TemplateLiteral {
    const quasis: string[] = [];
    const expressions: Expression[] = [];
    let currentQuasi = '';
    let i = 0;

    while (i < raw.length) {
      if (raw[i] === '$' && raw[i + 1] === '{') {
        quasis.push(currentQuasi);
        currentQuasi = '';
        i += 2; // skip ${

        let braceCount = 1;
        let exprStr = '';
        while (i < raw.length && braceCount > 0) {
          if (raw[i] === '{') braceCount++;
          else if (raw[i] === '}') braceCount--;
          if (braceCount > 0) exprStr += raw[i];
          i++;
        }

        const subLexer = new Lexer(exprStr);
        const subTokens = subLexer.tokenize();
        const subParser = new Parser(subTokens);
        expressions.push(subParser.expression());
      } else {
        currentQuasi += raw[i];
        i++;
      }
    }
    quasis.push(currentQuasi);

    return {
      type: 'TemplateLiteral',
      quasis,
      expressions
    };
  }

  // --- Helper Methods ---

  private match(...types: TokenType[]): boolean {
    for (const type of types) {
      if (this.check(type)) {
        this.advance();
        return true;
      }
    }
    return false;
  }

  private check(type: TokenType): boolean {
    if (this.isAtEnd()) return false;
    return this.peek().type === type;
  }

  private advance(): Token {
    if (!this.isAtEnd()) this.current++;
    return this.previous();
  }

  private isAtEnd(): boolean {
    return this.peek().type === TokenType.EOF;
  }

  private peek(): Token {
    return this.tokens[this.current];
  }

  private previous(): Token {
    return this.tokens[this.current - 1];
  }

  private consume(type: TokenType, message: string): Token {
    if (this.check(type)) return this.advance();
    const token = this.peek();
    throw new Error(`[MaduraLang Sala] ${message} (e-temmo '${token.value || token.type}' neng baris ${token.line}, kolom ${token.column})`);
  }

  private consumeSemicolon(): void {
    if (this.check(TokenType.SEMICOLON)) {
      this.advance();
    }
  }
}
