import { Token, TokenType } from './tokens.js';
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
  Identifier
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
    if (this.match(TokenType.SANGO)) {
      return this.variableDeclaration('sango');
    }
    if (this.match(TokenType.PAGGUN)) {
      return this.variableDeclaration('paggun');
    }
    if (this.match(TokenType.LAKONA)) {
      return this.functionDeclaration();
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

  private functionDeclaration(): FunctionDeclaration {
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
    const expr = this.logicalOr();

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
      return {
        type: 'Identifier',
        name: this.previous().value
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

    // Grouping (expr)
    if (this.match(TokenType.LPAREN)) {
      const expr = this.expression();
      this.consume(TokenType.RPAREN, "Koddhuna ')' saamponna ekspresi neng dhalem kurung");
      return expr;
    }

    const token = this.peek();
    throw new Error(
      `[MaduraLang Sala] Sintaks ta' e-kennal '${token.value || token.type}' neng baris ${token.line}, kolom ${token.column}`
    );
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
