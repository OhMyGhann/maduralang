export enum TokenType {
  // Keywords
  SANGO = 'SANGO',                 // sango (let/var)
  PAGGUN = 'PAGGUN',               // paggun (const)
  KOCAAGHI = 'KOCAAGHI',           // kocaaghi (console.log)
  TANYAAGHI = 'TANYAAGHI',         // tanyaaghi (readline sync / prompt)
  LAMON = 'LAMON',                 // lamon (if)
  LAMON_ENJA = 'LAMON_ENJA',       // lamon enja' / lamon enja (else if)
  LAEN = 'LAEN',                   // laen (else)
  POTER = 'POTER',                 // poter (for)
  SAMPEK = 'SAMPEK',               // sampek (while)
  AMBU = 'AMBU',                   // ambu (break)
  TERROS = 'TERROS',               // terros (continue)
  BHENDER = 'BHENDER',             // bhender (true)
  SALA = 'SALA',                   // sala (false)
  TADHE = 'TADHE',                 // tadhe' / tadhe (null)
  TA_TAO = 'TA_TAO',               // ta_tao (undefined)
  LAKONA = 'LAKONA',               // lakona (function)
  PABALI = 'PABALI',               // pabali (return)
  JHE_SOSSA = 'JHE_SOSSA',         // jhe_sossa (try)
  NGARTE = 'NGARTE',               // ngarte (catch)
  NGAMOK = 'NGAMOK',               // ngamok (throw)
  TOTOP = 'TOTOP',                 // totop (finally)
  BAN = 'BAN',                     // ban (&&)
  OTABA = 'OTABA',                 // otaba (||)
  BENNE = 'BENNE',                 // benne (!)

  // OOP / Class Keywords
  BHANGSA = 'BHANGSA',             // bhangsa (class)
  KATORONAN = 'KATORONAN',         // katoronan (extends)
  NYIPTAAGHI = 'NYIPTAAGHI',       // nyiptaaghi (constructor)
  ANYAR = 'ANYAR',                 // anyar (new)
  DIBI = 'DIBI',                   // dibi' / dibi (this)

  // Async / Await
  NYAMBI = 'NYAMBI',               // nyambi (async)
  ANTOSE = 'ANTOSE',               // antose (await)

  // Modules (Import / Export)
  NGALA = 'NGALA',                 // ngala' / ngala (import)
  DHARI = 'DHARI',                 // dhari (from)
  BAGHI = 'BAGHI',                 // baghi (export)

  // Switch / Case
  PILIH = 'PILIH',                 // pilih (switch)
  KADHADHIYAN = 'KADHADHIYAN',     // kadhadhiyan (case)
  BAWAAN = 'BAWAAN',               // bawaan (default)

  // Literals & Identifiers
  NUMBER = 'NUMBER',
  STRING = 'STRING',
  TEMPLATE_STRING = 'TEMPLATE_STRING', // `...`
  IDENTIFIER = 'IDENTIFIER',

  // Operators
  PLUS = 'PLUS',                   // +
  MINUS = 'MINUS',                 // -
  STAR = 'STAR',                   // *
  SLASH = 'SLASH',                 // /
  MODULO = 'MODULO',               // %
  ASSIGN = 'ASSIGN',               // =
  PLUS_ASSIGN = 'PLUS_ASSIGN',     // +=
  MINUS_ASSIGN = 'MINUS_ASSIGN',   // -=
  PLUS_PLUS = 'PLUS_PLUS',         // ++
  MINUS_MINUS = 'MINUS_MINUS',     // --
  EQ = 'EQ',                       // ==
  NOT_EQ = 'NOT_EQ',               // !=
  STRICT_EQ = 'STRICT_EQ',         // ===
  STRICT_NOT_EQ = 'STRICT_NOT_EQ', // !==
  LT = 'LT',                       // <
  GT = 'GT',                       // >
  LTE = 'LTE',                     // <=
  GTE = 'GTE',                     // >=
  ARROW = 'ARROW',                 // =>
  QUESTION = 'QUESTION',           // ?
  SPREAD = 'SPREAD',               // ...

  // Delimiters & Punctuation
  LPAREN = 'LPAREN',               // (
  RPAREN = 'RPAREN',               // )
  LBRACE = 'LBRACE',               // {
  RBRACE = 'RBRACE',               // }
  LBRACKET = 'LBRACKET',           // [
  RBRACKET = 'RBRACKET',           // ]
  SEMICOLON = 'SEMICOLON',         // ;
  COMMA = 'COMMA',                 // ,
  DOT = 'DOT',                     // .
  COLON = 'COLON',                 // :

  EOF = 'EOF'
}

export interface Token {
  type: TokenType;
  value: string;
  line: number;
  column: number;
}
