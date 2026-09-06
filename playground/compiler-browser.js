// Browser-ready bundle of MaduraLang Lexer, Parser, and Codegen
// Works standalone in any browser without Node.js dependencies

export const TokenType = {
  SANGO: 'SANGO',
  PAGGUN: 'PAGGUN',
  KOCAAGHI: 'KOCAAGHI',
  TANYAAGHI: 'TANYAAGHI',
  LAMON: 'LAMON',
  LAMON_ENJA: 'LAMON_ENJA',
  LAEN: 'LAEN',
  POTER: 'POTER',
  SAMPEK: 'SAMPEK',
  AMBU: 'AMBU',
  TERROS: 'TERROS',
  BHENDER: 'BHENDER',
  SALA: 'SALA',
  TADHE: 'TADHE',
  TA_TAO: 'TA_TAO',
  LAKONA: 'LAKONA',
  PABALI: 'PABALI',
  JHE_SOSSA: 'JHE_SOSSA',
  NGARTE: 'NGARTE',
  NGAMOK: 'NGAMOK',
  TOTOP: 'TOTOP',
  BAN: 'BAN',
  OTABA: 'OTABA',
  BENNE: 'BENNE',
  NUMBER: 'NUMBER',
  STRING: 'STRING',
  IDENTIFIER: 'IDENTIFIER',
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  STAR: 'STAR',
  SLASH: 'SLASH',
  MODULO: 'MODULO',
  ASSIGN: 'ASSIGN',
  PLUS_ASSIGN: 'PLUS_ASSIGN',
  MINUS_ASSIGN: 'MINUS_ASSIGN',
  PLUS_PLUS: 'PLUS_PLUS',
  MINUS_MINUS: 'MINUS_MINUS',
  EQ: 'EQ',
  NOT_EQ: 'NOT_EQ',
  STRICT_EQ: 'STRICT_EQ',
  STRICT_NOT_EQ: 'STRICT_NOT_EQ',
  LT: 'LT',
  GT: 'GT',
  LTE: 'LTE',
  GTE: 'GTE',
  LPAREN: 'LPAREN',
  RPAREN: 'RPAREN',
  LBRACE: 'LBRACE',
  RBRACE: 'RBRACE',
  LBRACKET: 'LBRACKET',
  RBRACKET: 'RBRACKET',
  SEMICOLON: 'SEMICOLON',
  COMMA: 'COMMA',
  DOT: 'DOT',
  COLON: 'COLON',
  EOF: 'EOF'
};

export class Lexer {
  constructor(source) {
    this.source = source;
    this.position = 0;
    this.line = 1;
    this.column = 1;
    this.tokens = [];
  }

  tokenize() {
    while (!this.isAtEnd()) {
      const char = this.peek();

      if (char === ' ' || char === '\r' || char === '\t') {
        this.advance();
        continue;
      }

      if (char === '\n') {
        this.line++;
        this.column = 1;
        this.advance();
        continue;
      }

      if (char === '/' && this.peekNext() === '/') {
        while (!this.isAtEnd() && this.peek() !== '\n') this.advance();
        continue;
      }

      if (char === '/' && this.peekNext() === '*') {
        this.advance();
        this.advance();
        while (!this.isAtEnd() && !(this.peek() === '*' && this.peekNext() === '/')) {
          if (this.peek() === '\n') { this.line++; this.column = 1; }
          this.advance();
        }
        if (!this.isAtEnd()) { this.advance(); this.advance(); }
        continue;
      }

      if (this.isDigit(char)) { this.tokenizeNumber(); continue; }
      if (char === '"' || char === "'" || char === '`') { this.tokenizeString(char); continue; }
      if (this.isAlpha(char)) { this.tokenizeIdentifierOrKeyword(); continue; }
      this.tokenizeSymbol();
    }

    this.tokens.push({ type: TokenType.EOF, value: '', line: this.line, column: this.column });
    return this.tokens;
  }

  tokenizeNumber() {
    const startCol = this.column;
    let numStr = '';
    while (!this.isAtEnd() && (this.isDigit(this.peek()) || (this.peek() === '.' && this.isDigit(this.peekNext())))) {
      numStr += this.advance();
    }
    this.tokens.push({ type: TokenType.NUMBER, value: numStr, line: this.line, column: startCol });
  }

  tokenizeString(quote) {
    const startCol = this.column;
    const startLine = this.line;
    this.advance();
    let strVal = '';

    while (!this.isAtEnd() && this.peek() !== quote) {
      if (this.peek() === '\\' && this.peekNext() !== '') {
        this.advance();
        const escaped = this.advance();
        if (escaped === 'n') strVal += '\n';
        else if (escaped === 't') strVal += '\t';
        else if (escaped === 'r') strVal += '\r';
        else strVal += escaped;
      } else {
        if (this.peek() === '\n') { this.line++; this.column = 1; }
        strVal += this.advance();
      }
    }

    if (this.isAtEnd()) {
      throw new Error(`[MaduraLang Sala] Tolesan string ta' mareh neng baris ${startLine}, kolom ${startCol}`);
    }

    this.advance();
    this.tokens.push({ type: TokenType.STRING, value: strVal, line: startLine, column: startCol });
  }

  tokenizeIdentifierOrKeyword() {
    const startCol = this.column;
    let word = '';
    while (!this.isAtEnd() && (this.isAlphaNumeric(this.peek()) || this.peek() === "'")) {
      word += this.advance();
    }

    if (word === 'lamon') {
      const savedPos = this.position;
      const savedCol = this.column;
      const savedLine = this.line;
      while (!this.isAtEnd() && (this.peek() === ' ' || this.peek() === '\t')) this.advance();
      let nextWord = '';
      while (!this.isAtEnd() && (this.isAlphaNumeric(this.peek()) || this.peek() === "'")) {
        nextWord += this.advance();
      }
      if (nextWord === "enja'" || nextWord === 'enja') {
        this.tokens.push({ type: TokenType.LAMON_ENJA, value: "lamon enja'", line: this.line, column: startCol });
        return;
      } else {
        this.position = savedPos; this.column = savedCol; this.line = savedLine;
      }
    }

    const map = {
      'sango': TokenType.SANGO,
      'paggun': TokenType.PAGGUN,
      'kocaaghi': TokenType.KOCAAGHI,
      'tanyaaghi': TokenType.TANYAAGHI,
      'lamon': TokenType.LAMON,
      'laen': TokenType.LAEN,
      'poter': TokenType.POTER,
      'sampek': TokenType.SAMPEK,
      'ambu': TokenType.AMBU,
      'terros': TokenType.TERROS,
      'bhender': TokenType.BHENDER,
      'sala': TokenType.SALA,
      "tadhe'": TokenType.TADHE,
      'tadhe': TokenType.TADHE,
      'tadak': TokenType.TADHE,
      'ta_tao': TokenType.TA_TAO,
      'lakona': TokenType.LAKONA,
      'pabali': TokenType.PABALI,
      'jhe_sossa': TokenType.JHE_SOSSA,
      'ngarte': TokenType.NGARTE,
      'ngamok': TokenType.NGAMOK,
      'totop': TokenType.TOTOP,
      'ban': TokenType.BAN,
      'otaba': TokenType.OTABA,
      'benne': TokenType.BENNE
    };

    const type = map[word.toLowerCase()];
    if (type) {
      this.addToken(type, word, startCol);
    } else {
      this.addToken(TokenType.IDENTIFIER, word.replace(/'/g, ''), startCol);
    }
  }

  tokenizeSymbol() {
    const startCol = this.column;
    const char = this.advance();
    switch (char) {
      case '(': this.addToken(TokenType.LPAREN, char, startCol); break;
      case ')': this.addToken(TokenType.RPAREN, char, startCol); break;
      case '{': this.addToken(TokenType.LBRACE, char, startCol); break;
      case '}': this.addToken(TokenType.RBRACE, char, startCol); break;
      case '[': this.addToken(TokenType.LBRACKET, char, startCol); break;
      case ']': this.addToken(TokenType.RBRACKET, char, startCol); break;
      case ';': this.addToken(TokenType.SEMICOLON, char, startCol); break;
      case ',': this.addToken(TokenType.COMMA, char, startCol); break;
      case '.': this.addToken(TokenType.DOT, char, startCol); break;
      case ':': this.addToken(TokenType.COLON, char, startCol); break;
      case '+':
        if (this.match('+')) this.addToken(TokenType.PLUS_PLUS, '++', startCol);
        else if (this.match('=')) this.addToken(TokenType.PLUS_ASSIGN, '+=', startCol);
        else this.addToken(TokenType.PLUS, '+', startCol);
        break;
      case '-':
        if (this.match('-')) this.addToken(TokenType.MINUS_MINUS, '--', startCol);
        else if (this.match('=')) this.addToken(TokenType.MINUS_ASSIGN, '-=', startCol);
        else this.addToken(TokenType.MINUS, '-', startCol);
        break;
      case '*': this.addToken(TokenType.STAR, '*', startCol); break;
      case '/': this.addToken(TokenType.SLASH, '/', startCol); break;
      case '%': this.addToken(TokenType.MODULO, '%', startCol); break;
      case '=':
        if (this.match('=')) {
          if (this.match('=')) this.addToken(TokenType.STRICT_EQ, '===', startCol);
          else this.addToken(TokenType.EQ, '==', startCol);
        } else this.addToken(TokenType.ASSIGN, '=', startCol);
        break;
      case '!':
        if (this.match('=')) {
          if (this.match('=')) this.addToken(TokenType.STRICT_NOT_EQ, '!==', startCol);
          else this.addToken(TokenType.NOT_EQ, '!=', startCol);
        } else this.addToken(TokenType.BENNE, '!', startCol);
        break;
      case '<':
        if (this.match('=')) this.addToken(TokenType.LTE, '<=', startCol);
        else this.addToken(TokenType.LT, '<', startCol);
        break;
      case '>':
        if (this.match('=')) this.addToken(TokenType.GTE, '>=', startCol);
        else this.addToken(TokenType.GT, '>', startCol);
        break;
      case '&':
        if (this.match('&')) this.addToken(TokenType.BAN, '&&', startCol);
        else throw new Error(`[MaduraLang Sala] Karakter ta' e-kennal '&' neng baris ${this.line}`);
        break;
      case '|':
        if (this.match('|')) this.addToken(TokenType.OTABA, '||', startCol);
        else throw new Error(`[MaduraLang Sala] Karakter ta' e-kennal '|' neng baris ${this.line}`);
        break;
      default:
        throw new Error(`[MaduraLang Sala] Karakter ta' e-kennal '${char}' neng baris ${this.line}`);
    }
  }

  match(expected) {
    if (this.isAtEnd()) return false;
    if (this.source[this.position] !== expected) return false;
    this.position++; this.column++; return true;
  }
  advance() { const char = this.source[this.position++]; this.column++; return char; }
  peek() { return this.isAtEnd() ? '' : this.source[this.position]; }
  peekNext() { return this.position + 1 >= this.source.length ? '' : this.source[this.position + 1]; }
  isAtEnd() { return this.position >= this.source.length; }
  isDigit(char) { return char >= '0' && char <= '9'; }
  isAlpha(char) { return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === '_'; }
  isAlphaNumeric(char) { return this.isAlpha(char) || this.isDigit(char); }
  addToken(type, value, column) { this.tokens.push({ type, value, line: this.line, column }); }
}

export class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.current = 0;
  }

  parse() {
    const body = [];
    while (!this.isAtEnd()) {
      if (this.match(TokenType.SEMICOLON)) continue;
      body.push(this.statement());
    }
    return { type: 'Program', body };
  }

  statement() {
    if (this.match(TokenType.SANGO)) return this.variableDeclaration('sango');
    if (this.match(TokenType.PAGGUN)) return this.variableDeclaration('paggun');
    if (this.match(TokenType.LAKONA)) return this.functionDeclaration();
    if (this.match(TokenType.LAMON)) return this.ifStatement();
    if (this.match(TokenType.POTER)) return this.forStatement();
    if (this.match(TokenType.SAMPEK)) return this.whileStatement();
    if (this.match(TokenType.AMBU)) { this.consumeSemicolon(); return { type: 'BreakStatement' }; }
    if (this.match(TokenType.TERROS)) { this.consumeSemicolon(); return { type: 'ContinueStatement' }; }
    if (this.match(TokenType.PABALI)) return this.returnStatement();
    if (this.match(TokenType.JHE_SOSSA)) return this.tryCatchStatement();
    if (this.match(TokenType.NGAMOK)) return this.throwStatement();
    if (this.check(TokenType.LBRACE)) return this.blockStatement();
    return this.expressionStatement();
  }

  variableDeclaration(kind) {
    const nameToken = this.consume(TokenType.IDENTIFIER, `Koddhuna nyama variabel saamponna '${kind}'`);
    let init = undefined;
    if (this.match(TokenType.ASSIGN)) init = this.expression();
    this.consumeSemicolon();
    return { type: 'VariableDeclaration', kind, name: nameToken.value, init };
  }

  functionDeclaration() {
    const nameToken = this.consume(TokenType.IDENTIFIER, "Koddhuna nyama lakona (fungsi)");
    this.consume(TokenType.LPAREN, "Koddhuna '('");
    const params = [];
    if (!this.check(TokenType.RPAREN)) {
      do {
        params.push(this.consume(TokenType.IDENTIFIER, "Koddhuna nyama parameter").value);
      } while (this.match(TokenType.COMMA));
    }
    this.consume(TokenType.RPAREN, "Koddhuna ')'");
    const body = this.blockStatement();
    return { type: 'FunctionDeclaration', name: nameToken.value, params, body };
  }

  ifStatement() {
    this.consume(TokenType.LPAREN, "Koddhuna '('");
    const test = this.expression();
    this.consume(TokenType.RPAREN, "Koddhuna ')'");
    const consequent = this.blockStatement();
    let alternate = undefined;
    if (this.match(TokenType.LAMON_ENJA)) alternate = this.ifStatement();
    else if (this.match(TokenType.LAEN)) {
      if (this.match(TokenType.LAMON)) alternate = this.ifStatement();
      else alternate = this.blockStatement();
    }
    return { type: 'IfStatement', test, consequent, alternate };
  }

  forStatement() {
    this.consume(TokenType.LPAREN, "Koddhuna '('");
    let init = null;
    if (this.match(TokenType.SEMICOLON)) init = null;
    else if (this.match(TokenType.SANGO)) init = this.variableDeclaration('sango');
    else { init = this.expression(); this.consume(TokenType.SEMICOLON, "Koddhuna ';'"); }

    let test = null;
    if (!this.check(TokenType.SEMICOLON)) test = this.expression();
    this.consume(TokenType.SEMICOLON, "Koddhuna ';'");

    let update = null;
    if (!this.check(TokenType.RPAREN)) update = this.expression();
    this.consume(TokenType.RPAREN, "Koddhuna ')'");

    const body = this.blockStatement();
    return { type: 'ForStatement', init, test, update, body };
  }

  whileStatement() {
    this.consume(TokenType.LPAREN, "Koddhuna '('");
    const test = this.expression();
    this.consume(TokenType.RPAREN, "Koddhuna ')'");
    const body = this.blockStatement();
    return { type: 'WhileStatement', test, body };
  }

  returnStatement() {
    let argument = undefined;
    if (!this.check(TokenType.SEMICOLON) && !this.check(TokenType.RBRACE)) argument = this.expression();
    this.consumeSemicolon();
    return { type: 'ReturnStatement', argument };
  }

  tryCatchStatement() {
    const block = this.blockStatement();
    let handler = undefined;
    if (this.match(TokenType.NGARTE)) {
      let param = 'err';
      if (this.match(TokenType.LPAREN)) {
        param = this.consume(TokenType.IDENTIFIER, "Koddhuna param").value;
        this.consume(TokenType.RPAREN, "Koddhuna ')'");
      }
      handler = { param, body: this.blockStatement() };
    }
    let finalizer = undefined;
    if (this.match(TokenType.TOTOP)) finalizer = this.blockStatement();
    return { type: 'TryCatchStatement', block, handler, finalizer };
  }

  throwStatement() {
    const argument = this.expression();
    this.consumeSemicolon();
    return { type: 'ThrowStatement', argument };
  }

  blockStatement() {
    this.consume(TokenType.LBRACE, "Koddhuna '{'");
    const body = [];
    while (!this.check(TokenType.RBRACE) && !this.isAtEnd()) {
      if (this.match(TokenType.SEMICOLON)) continue;
      body.push(this.statement());
    }
    this.consume(TokenType.RBRACE, "Koddhuna '}'");
    return { type: 'BlockStatement', body };
  }

  expressionStatement() {
    const expression = this.expression();
    this.consumeSemicolon();
    return { type: 'ExpressionStatement', expression };
  }

  expression() { return this.assignment(); }

  assignment() {
    const expr = this.logicalOr();
    if (this.match(TokenType.ASSIGN) || this.match(TokenType.PLUS_ASSIGN) || this.match(TokenType.MINUS_ASSIGN)) {
      const operator = this.previous().value;
      const value = this.assignment();
      return { type: 'AssignmentExpression', operator, left: expr, right: value };
    }
    return expr;
  }

  logicalOr() {
    let expr = this.logicalAnd();
    while (this.match(TokenType.OTABA)) {
      expr = { type: 'BinaryExpression', operator: '||', left: expr, right: this.logicalAnd() };
    }
    return expr;
  }

  logicalAnd() {
    let expr = this.equality();
    while (this.match(TokenType.BAN)) {
      expr = { type: 'BinaryExpression', operator: '&&', left: expr, right: this.equality() };
    }
    return expr;
  }

  equality() {
    let expr = this.comparison();
    while (this.match(TokenType.EQ) || this.match(TokenType.NOT_EQ) || this.match(TokenType.STRICT_EQ) || this.match(TokenType.STRICT_NOT_EQ)) {
      expr = { type: 'BinaryExpression', operator: this.previous().value, left: expr, right: this.comparison() };
    }
    return expr;
  }

  comparison() {
    let expr = this.additive();
    while (this.match(TokenType.LT) || this.match(TokenType.LTE) || this.match(TokenType.GT) || this.match(TokenType.GTE)) {
      expr = { type: 'BinaryExpression', operator: this.previous().value, left: expr, right: this.additive() };
    }
    return expr;
  }

  additive() {
    let expr = this.multiplicative();
    while (this.match(TokenType.PLUS) || this.match(TokenType.MINUS)) {
      expr = { type: 'BinaryExpression', operator: this.previous().value, left: expr, right: this.multiplicative() };
    }
    return expr;
  }

  multiplicative() {
    let expr = this.unary();
    while (this.match(TokenType.STAR) || this.match(TokenType.SLASH) || this.match(TokenType.MODULO)) {
      expr = { type: 'BinaryExpression', operator: this.previous().value, left: expr, right: this.unary() };
    }
    return expr;
  }

  unary() {
    if (this.match(TokenType.BENNE)) return { type: 'UnaryExpression', operator: '!', argument: this.unary(), prefix: true };
    if (this.match(TokenType.MINUS)) return { type: 'UnaryExpression', operator: '-', argument: this.unary(), prefix: true };
    if (this.match(TokenType.PLUS_PLUS) || this.match(TokenType.MINUS_MINUS)) {
      const operator = this.previous().value;
      const operand = this.unary();
      return { type: 'UpdateExpression', operator, argument: operand, prefix: true };
    }
    return this.postfix();
  }

  postfix() {
    let expr = this.callOrMember();
    if (this.match(TokenType.PLUS_PLUS) || this.match(TokenType.MINUS_MINUS)) {
      const operator = this.previous().value;
      return { type: 'UpdateExpression', operator, argument: expr, prefix: false };
    }
    return expr;
  }

  callOrMember() {
    let expr = this.primary();
    while (true) {
      if (this.match(TokenType.LPAREN)) {
        const args = [];
        if (!this.check(TokenType.RPAREN)) {
          do { args.push(this.expression()); } while (this.match(TokenType.COMMA));
        }
        this.consume(TokenType.RPAREN, "Koddhuna ')'");
        expr = { type: 'CallExpression', callee: expr, arguments: args };
      } else if (this.match(TokenType.DOT)) {
        const prop = this.consume(TokenType.IDENTIFIER, "Koddhuna properti");
        expr = { type: 'MemberExpression', object: expr, property: { type: 'Identifier', name: prop.value }, computed: false };
      } else if (this.match(TokenType.LBRACKET)) {
        const prop = this.expression();
        this.consume(TokenType.RBRACKET, "Koddhuna ']'");
        expr = { type: 'MemberExpression', object: expr, property: prop, computed: true };
      } else break;
    }
    return expr;
  }

  primary() {
    if (this.match(TokenType.NUMBER)) return { type: 'NumberLiteral', value: parseFloat(this.previous().value) };
    if (this.match(TokenType.STRING)) return { type: 'StringLiteral', value: this.previous().value };
    if (this.match(TokenType.BHENDER)) return { type: 'BooleanLiteral', value: true };
    if (this.match(TokenType.SALA)) return { type: 'BooleanLiteral', value: false };
    if (this.match(TokenType.TADHE)) return { type: 'NullLiteral' };
    if (this.match(TokenType.TA_TAO)) return { type: 'UndefinedLiteral' };
    if (this.match(TokenType.KOCAAGHI)) return { type: 'Identifier', name: 'kocaaghi' };
    if (this.match(TokenType.TANYAAGHI)) return { type: 'Identifier', name: 'tanyaaghi' };
    if (this.match(TokenType.IDENTIFIER)) return { type: 'Identifier', name: this.previous().value };

    if (this.match(TokenType.LBRACKET)) {
      const elements = [];
      if (!this.check(TokenType.RBRACKET)) {
        do { elements.push(this.expression()); } while (this.match(TokenType.COMMA));
      }
      this.consume(TokenType.RBRACKET, "Koddhuna ']'");
      return { type: 'ArrayLiteral', elements };
    }

    if (this.match(TokenType.LBRACE)) {
      const properties = [];
      if (!this.check(TokenType.RBRACE)) {
        do {
          let key;
          if (this.match(TokenType.IDENTIFIER) || this.match(TokenType.STRING)) key = this.previous().value;
          else throw new Error(`[MaduraLang Sala] Koddhuna kunci objek`);
          this.consume(TokenType.COLON, "Koddhuna ':'");
          properties.push({ key, value: this.expression() });
        } while (this.match(TokenType.COMMA));
      }
      this.consume(TokenType.RBRACE, "Koddhuna '}'");
      return { type: 'ObjectLiteral', properties };
    }

    if (this.match(TokenType.LPAREN)) {
      const expr = this.expression();
      this.consume(TokenType.RPAREN, "Koddhuna ')'");
      return expr;
    }

    const token = this.peek();
    throw new Error(`[MaduraLang Sala] Sintaks ta' e-kennal '${token.value || token.type}' neng baris ${token.line}`);
  }

  match(...types) {
    for (const t of types) {
      if (this.check(t)) { this.advance(); return true; }
    }
    return false;
  }
  check(type) { return !this.isAtEnd() && this.peek().type === type; }
  advance() { if (!this.isAtEnd()) this.current++; return this.previous(); }
  isAtEnd() { return this.peek().type === TokenType.EOF; }
  peek() { return this.tokens[this.current]; }
  previous() { return this.tokens[this.current - 1]; }
  consume(type, msg) {
    if (this.check(type)) return this.advance();
    const t = this.peek();
    throw new Error(`[MaduraLang Sala] ${msg} (e-temmo '${t.value || t.type}' neng baris ${t.line})`);
  }
  consumeSemicolon() { if (this.check(TokenType.SEMICOLON)) this.advance(); }
}

export class CodeGenerator {
  constructor() { this.indentLevel = 0; }

  generate(program) {
    const lines = [];
    for (const stmt of program.body) lines.push(this.generateStatement(stmt));
    return lines.join('\n');
  }

  indent() { return '  '.repeat(this.indentLevel); }

  generateStatement(stmt) {
    switch (stmt.type) {
      case 'VariableDeclaration': {
        const kw = stmt.kind === 'sango' ? 'let' : 'const';
        return `${this.indent()}${kw} ${stmt.name}${stmt.init ? ' = ' + this.generateExpression(stmt.init) : ''};`;
      }
      case 'FunctionDeclaration': {
        const header = `${this.indent()}function ${stmt.name}(${stmt.params.join(', ')}) `;
        return `${header}${this.generateBlockStatement(stmt.body).trimStart()}`;
      }
      case 'IfStatement': {
        let code = `${this.indent()}if (${this.generateExpression(stmt.test)}) ${this.generateStatement(stmt.consequent).trimStart()}`;
        if (stmt.alternate) {
          code += (stmt.alternate.type === 'IfStatement')
            ? ` else ${this.generateIfStatement(stmt.alternate).trimStart()}`
            : ` else ${this.generateStatement(stmt.alternate).trimStart()}`;
        }
        return code;
      }
      case 'ForStatement': {
        let initStr = '';
        if (stmt.init) {
          if (stmt.init.type === 'VariableDeclaration') {
            const kw = stmt.init.kind === 'sango' ? 'let' : 'const';
            initStr = `${kw} ${stmt.init.name} = ${stmt.init.init ? this.generateExpression(stmt.init.init) : 'undefined'}`;
          } else initStr = this.generateExpression(stmt.init);
        }
        const tStr = stmt.test ? this.generateExpression(stmt.test) : '';
        const uStr = stmt.update ? this.generateExpression(stmt.update) : '';
        return `${this.indent()}for (${initStr}; ${tStr}; ${uStr}) ${this.generateStatement(stmt.body).trimStart()}`;
      }
      case 'WhileStatement':
        return `${this.indent()}while (${this.generateExpression(stmt.test)}) ${this.generateStatement(stmt.body).trimStart()}`;
      case 'BreakStatement': return `${this.indent()}break;`;
      case 'ContinueStatement': return `${this.indent()}continue;`;
      case 'ReturnStatement':
        return `${this.indent()}return${stmt.argument ? ' ' + this.generateExpression(stmt.argument) : ''};`;
      case 'TryCatchStatement': {
        let code = `${this.indent()}try ${this.generateBlockStatement(stmt.block).trimStart()}`;
        if (stmt.handler) code += ` catch (${stmt.handler.param}) ${this.generateBlockStatement(stmt.handler.body).trimStart()}`;
        if (stmt.finalizer) code += ` finally ${this.generateBlockStatement(stmt.finalizer).trimStart()}`;
        return code;
      }
      case 'ThrowStatement':
        return `${this.indent()}throw ${this.generateExpression(stmt.argument)};`;
      case 'BlockStatement': return this.generateBlockStatement(stmt);
      case 'ExpressionStatement':
        return `${this.indent()}${this.generateExpression(stmt.expression)};`;
      default: return '';
    }
  }

  generateBlockStatement(stmt) {
    const lines = [`${this.indent()}{`];
    this.indentLevel++;
    for (const s of stmt.body) lines.push(this.generateStatement(s));
    this.indentLevel--;
    lines.push(`${this.indent()}}`);
    return lines.join('\n');
  }

  generateExpression(expr) {
    switch (expr.type) {
      case 'NumberLiteral': return String(expr.value);
      case 'StringLiteral': return JSON.stringify(expr.value);
      case 'BooleanLiteral': return expr.value ? 'true' : 'false';
      case 'NullLiteral': return 'null';
      case 'UndefinedLiteral': return 'undefined';
      case 'Identifier': return expr.name;
      case 'BinaryExpression':
        return `(${this.generateExpression(expr.left)} ${expr.operator} ${this.generateExpression(expr.right)})`;
      case 'UnaryExpression': return `${expr.operator}(${this.generateExpression(expr.argument)})`;
      case 'UpdateExpression':
        return expr.prefix ? `${expr.operator}${expr.argument.name}` : `${expr.argument.name}${expr.operator}`;
      case 'AssignmentExpression':
        return `${this.generateExpression(expr.left)} ${expr.operator} ${this.generateExpression(expr.right)}`;
      case 'CallExpression':
        return `${this.generateExpression(expr.callee)}(${expr.arguments.map(a => this.generateExpression(a)).join(', ')})`;
      case 'MemberExpression':
        return expr.computed
          ? `${this.generateExpression(expr.object)}[${this.generateExpression(expr.property)}]`
          : `${this.generateExpression(expr.object)}.${expr.property.name}`;
      case 'ArrayLiteral':
        return `[${expr.elements.map(e => this.generateExpression(e)).join(', ')}]`;
      case 'ObjectLiteral':
        return `{ ${expr.properties.map(p => `${p.key}: ${this.generateExpression(p.value)}`).join(', ')} }`;
      default: return '';
    }
  }
}

export function compileMadura(source) {
  const lexer = new Lexer(source);
  const tokens = lexer.tokenize();
  const parser = new Parser(tokens);
  const ast = parser.parse();
  const codegen = new CodeGenerator();
  return codegen.generate(ast);
}
