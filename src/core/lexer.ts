import { Token, TokenType } from './tokens.js';

export class Lexer {
  private source: string;
  private position: number = 0;
  private line: number = 1;
  private column: number = 1;
  private tokens: Token[] = [];

  constructor(source: string) {
    this.source = source;
  }

  public tokenize(): Token[] {
    while (!this.isAtEnd()) {
      const char = this.peek();

      // Whitespace
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

      // Comments
      if (char === '/' && this.peekNext() === '/') {
        // Line comment
        while (!this.isAtEnd() && this.peek() !== '\n') {
          this.advance();
        }
        continue;
      }

      if (char === '/' && this.peekNext() === '*') {
        // Block comment
        this.advance(); // /
        this.advance(); // *
        while (!this.isAtEnd() && !(this.peek() === '*' && this.peekNext() === '/')) {
          if (this.peek() === '\n') {
            this.line++;
            this.column = 1;
          }
          this.advance();
        }
        if (!this.isAtEnd()) {
          this.advance(); // *
          this.advance(); // /
        }
        continue;
      }

      // Numbers
      if (this.isDigit(char)) {
        this.tokenizeNumber();
        continue;
      }

      // Strings
      if (char === '"' || char === "'" || char === '`') {
        this.tokenizeString(char);
        continue;
      }

      // Identifiers / Keywords
      if (this.isAlpha(char)) {
        this.tokenizeIdentifierOrKeyword();
        continue;
      }

      // Operators & Delimiters
      this.tokenizeSymbol();
    }

    this.tokens.push({
      type: TokenType.EOF,
      value: '',
      line: this.line,
      column: this.column
    });

    return this.tokens;
  }

  private tokenizeNumber(): void {
    const startCol = this.column;
    let numStr = '';

    while (!this.isAtEnd() && (this.isDigit(this.peek()) || (this.peek() === '.' && this.isDigit(this.peekNext())))) {
      numStr += this.advance();
    }

    this.tokens.push({
      type: TokenType.NUMBER,
      value: numStr,
      line: this.line,
      column: startCol
    });
  }

  private tokenizeString(quote: string): void {
    const startCol = this.column;
    const startLine = this.line;
    this.advance(); // consume opening quote
    let strVal = '';

    while (!this.isAtEnd() && this.peek() !== quote) {
      if (this.peek() === '\\' && this.peekNext() !== '') {
        this.advance(); // \
        const escaped = this.advance();
        if (escaped === 'n') strVal += '\n';
        else if (escaped === 't') strVal += '\t';
        else if (escaped === 'r') strVal += '\r';
        else strVal += escaped;
      } else {
        if (this.peek() === '\n') {
          this.line++;
          this.column = 1;
        }
        strVal += this.advance();
      }
    }

    if (this.isAtEnd()) {
      throw new Error(`[MaduraLang Sala] Tolesan string ta' mareh neng baris ${startLine}, kolom ${startCol}`);
    }

    this.advance(); // consume closing quote

    this.tokens.push({
      type: quote === '`' ? TokenType.TEMPLATE_STRING : TokenType.STRING,
      value: strVal,
      line: startLine,
      column: startCol
    });
  }

  private tokenizeIdentifierOrKeyword(): void {
    const startCol = this.column;
    let word = '';

    while (!this.isAtEnd() && (this.isAlphaNumeric(this.peek()) || this.peek() === "'")) {
      // allow apostrophe within or at end of keyword like tadhe' or enja'
      word += this.advance();
    }

    // Check multi-word keyword: "lamon" followed by "enja'" or "enja"
    if (word === 'lamon') {
      const savedPos = this.position;
      const savedCol = this.column;
      const savedLine = this.line;

      // Skip whitespaces
      while (!this.isAtEnd() && (this.peek() === ' ' || this.peek() === '\t')) {
        this.advance();
      }

      let nextWord = '';
      const checkpoint = this.position;
      while (!this.isAtEnd() && (this.isAlphaNumeric(this.peek()) || this.peek() === "'")) {
        nextWord += this.advance();
      }

      if (nextWord === "enja'" || nextWord === 'enja') {
        this.tokens.push({
          type: TokenType.LAMON_ENJA,
          value: "lamon enja'",
          line: this.line,
          column: startCol
        });
        return;
      } else {
        // Rollback
        this.position = savedPos;
        this.column = savedCol;
        this.line = savedLine;
      }
    }

    // Match single keywords
    const lowerWord = word.toLowerCase();
    switch (lowerWord) {
      case 'sango':
        this.addToken(TokenType.SANGO, word, startCol);
        break;
      case 'paggun':
        this.addToken(TokenType.PAGGUN, word, startCol);
        break;
      case 'kocaaghi':
        this.addToken(TokenType.KOCAAGHI, word, startCol);
        break;
      case 'tanyaaghi':
        this.addToken(TokenType.TANYAAGHI, word, startCol);
        break;
      case 'lamon':
        this.addToken(TokenType.LAMON, word, startCol);
        break;
      case 'laen':
        this.addToken(TokenType.LAEN, word, startCol);
        break;
      case 'poter':
        this.addToken(TokenType.POTER, word, startCol);
        break;
      case 'sampek':
        this.addToken(TokenType.SAMPEK, word, startCol);
        break;
      case 'ambu':
        this.addToken(TokenType.AMBU, word, startCol);
        break;
      case 'terros':
        this.addToken(TokenType.TERROS, word, startCol);
        break;
      case 'bhender':
        this.addToken(TokenType.BHENDER, word, startCol);
        break;
      case 'sala':
        this.addToken(TokenType.SALA, word, startCol);
        break;
      case "tadhe'":
      case 'tadhe':
      case 'tadak':
        this.addToken(TokenType.TADHE, word, startCol);
        break;
      case 'ta_tao':
        this.addToken(TokenType.TA_TAO, word, startCol);
        break;
      case 'lakona':
        this.addToken(TokenType.LAKONA, word, startCol);
        break;
      case 'pabali':
        this.addToken(TokenType.PABALI, word, startCol);
        break;
      case 'jhe_sossa':
        this.addToken(TokenType.JHE_SOSSA, word, startCol);
        break;
      case 'ngarte':
        this.addToken(TokenType.NGARTE, word, startCol);
        break;
      case 'ngamok':
        this.addToken(TokenType.NGAMOK, word, startCol);
        break;
      case 'totop':
        this.addToken(TokenType.TOTOP, word, startCol);
        break;
      case 'ban':
        this.addToken(TokenType.BAN, word, startCol);
        break;
      case 'otaba':
        this.addToken(TokenType.OTABA, word, startCol);
        break;
      case 'benne':
        this.addToken(TokenType.BENNE, word, startCol);
        break;
      // OOP
      case 'bhangsa':
      case 'bhângsa':
        this.addToken(TokenType.BHANGSA, word, startCol);
        break;
      case 'katoronan':
        this.addToken(TokenType.KATORONAN, word, startCol);
        break;
      case 'nyiptaaghi':
        this.addToken(TokenType.NYIPTAAGHI, word, startCol);
        break;
      case 'anyar':
        this.addToken(TokenType.ANYAR, word, startCol);
        break;
      case "dibi'":
      case 'dibi':
        this.addToken(TokenType.DIBI, word, startCol);
        break;
      // Async / Await
      case 'nyambi':
        this.addToken(TokenType.NYAMBI, word, startCol);
        break;
      case 'antose':
        this.addToken(TokenType.ANTOSE, word, startCol);
        break;
      // Modules
      case "ngala'":
      case 'ngala':
        this.addToken(TokenType.NGALA, word, startCol);
        break;
      case 'dhari':
        this.addToken(TokenType.DHARI, word, startCol);
        break;
      case 'baghi':
        this.addToken(TokenType.BAGHI, word, startCol);
        break;
      // Switch / Case
      case 'pilih':
        this.addToken(TokenType.PILIH, word, startCol);
        break;
      case 'kadhadhiyan':
        this.addToken(TokenType.KADHADHIYAN, word, startCol);
        break;
      case 'bawaan':
        this.addToken(TokenType.BAWAAN, word, startCol);
        break;
      default:
        // Identifiers can't have trailing apostrophes unless keyword
        const cleanIdent = word.replace(/'/g, '');
        this.addToken(TokenType.IDENTIFIER, cleanIdent, startCol);
        break;
    }
  }

  private tokenizeSymbol(): void {
    const startCol = this.column;
    const char = this.advance();

    switch (char) {
      case '(':
        this.addToken(TokenType.LPAREN, char, startCol);
        break;
      case ')':
        this.addToken(TokenType.RPAREN, char, startCol);
        break;
      case '{':
        this.addToken(TokenType.LBRACE, char, startCol);
        break;
      case '}':
        this.addToken(TokenType.RBRACE, char, startCol);
        break;
      case '[':
        this.addToken(TokenType.LBRACKET, char, startCol);
        break;
      case ']':
        this.addToken(TokenType.RBRACKET, char, startCol);
        break;
      case ';':
        this.addToken(TokenType.SEMICOLON, char, startCol);
        break;
      case ',':
        this.addToken(TokenType.COMMA, char, startCol);
        break;
      case '.':
        if (this.peek() === '.' && this.peekNext() === '.') {
          this.advance(); // .
          this.advance(); // .
          this.addToken(TokenType.SPREAD, '...', startCol);
        } else {
          this.addToken(TokenType.DOT, char, startCol);
        }
        break;
      case ':':
        this.addToken(TokenType.COLON, char, startCol);
        break;
      case '?':
        this.addToken(TokenType.QUESTION, char, startCol);
        break;

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

      case '*':
        this.addToken(TokenType.STAR, '*', startCol);
        break;

      case '/':
        this.addToken(TokenType.SLASH, '/', startCol);
        break;

      case '%':
        this.addToken(TokenType.MODULO, '%', startCol);
        break;

      case '=':
        if (this.match('>')) {
          this.addToken(TokenType.ARROW, '=>', startCol);
        } else if (this.match('=')) {
          if (this.match('=')) {
            this.addToken(TokenType.STRICT_EQ, '===', startCol);
          } else {
            this.addToken(TokenType.EQ, '==', startCol);
          }
        } else {
          this.addToken(TokenType.ASSIGN, '=', startCol);
        }
        break;

      case '!':
        if (this.match('=')) {
          if (this.match('=')) {
            this.addToken(TokenType.STRICT_NOT_EQ, '!==', startCol);
          } else {
            this.addToken(TokenType.NOT_EQ, '!=', startCol);
          }
        } else {
          this.addToken(TokenType.BENNE, '!', startCol);
        }
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
        if (this.match('&')) {
          this.addToken(TokenType.BAN, '&&', startCol);
        } else {
          throw new Error(`[MaduraLang Sala] Karakter ta' e-kennal '&' neng baris ${this.line}, kolom ${startCol}. Koddhuna 'ban' otaba '&&'.`);
        }
        break;

      case '|':
        if (this.match('|')) {
          this.addToken(TokenType.OTABA, '||', startCol);
        } else {
          throw new Error(`[MaduraLang Sala] Karakter ta' e-kennal '|' neng baris ${this.line}, kolom ${startCol}. Koddhuna 'otaba' otaba '||'.`);
        }
        break;

      default:
        throw new Error(`[MaduraLang Sala] Karakter ta' e-kennal '${char}' neng baris ${this.line}, kolom ${startCol}`);
    }
  }

  private match(expected: string): boolean {
    if (this.isAtEnd()) return false;
    if (this.source[this.position] !== expected) return false;
    this.position++;
    this.column++;
    return true;
  }

  private advance(): string {
    const char = this.source[this.position++];
    this.column++;
    return char;
  }

  private peek(): string {
    if (this.isAtEnd()) return '';
    return this.source[this.position];
  }

  private peekNext(): string {
    if (this.position + 1 >= this.source.length) return '';
    return this.source[this.position + 1];
  }

  private isAtEnd(): boolean {
    return this.position >= this.source.length;
  }

  private isDigit(char: string): boolean {
    return char >= '0' && char <= '9';
  }

  private isAlpha(char: string): boolean {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === '_';
  }

  private isAlphaNumeric(char: string): boolean {
    return this.isAlpha(char) || this.isDigit(char);
  }

  private addToken(type: TokenType, value: string, column: number): void {
    this.tokens.push({
      type,
      value,
      line: this.line,
      column
    });
  }
}
