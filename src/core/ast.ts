export type NodeType =
  | 'Program'
  | 'VariableDeclaration'
  | 'ExpressionStatement'
  | 'BlockStatement'
  | 'IfStatement'
  | 'ForStatement'
  | 'WhileStatement'
  | 'BreakStatement'
  | 'ContinueStatement'
  | 'FunctionDeclaration'
  | 'ReturnStatement'
  | 'TryCatchStatement'
  | 'ThrowStatement'
  | 'BinaryExpression'
  | 'UnaryExpression'
  | 'UpdateExpression'
  | 'AssignmentExpression'
  | 'CallExpression'
  | 'MemberExpression'
  | 'ArrayLiteral'
  | 'ObjectLiteral'
  | 'Identifier'
  | 'NumberLiteral'
  | 'StringLiteral'
  | 'BooleanLiteral'
  | 'NullLiteral'
  | 'UndefinedLiteral';

export interface ASTNode {
  type: NodeType;
  line?: number;
  column?: number;
}

export interface Program extends ASTNode {
  type: 'Program';
  body: Statement[];
}

export type Statement =
  | VariableDeclaration
  | ExpressionStatement
  | BlockStatement
  | IfStatement
  | ForStatement
  | WhileStatement
  | BreakStatement
  | ContinueStatement
  | FunctionDeclaration
  | ReturnStatement
  | TryCatchStatement
  | ThrowStatement;

export interface VariableDeclaration extends ASTNode {
  type: 'VariableDeclaration';
  kind: 'sango' | 'paggun';
  name: string;
  init?: Expression;
}

export interface ExpressionStatement extends ASTNode {
  type: 'ExpressionStatement';
  expression: Expression;
}

export interface BlockStatement extends ASTNode {
  type: 'BlockStatement';
  body: Statement[];
}

export interface IfStatement extends ASTNode {
  type: 'IfStatement';
  test: Expression;
  consequent: Statement;
  alternate?: Statement; // Bisa berupa IfStatement berikutnya (lamon enja') atau BlockStatement (laen)
}

export interface ForStatement extends ASTNode {
  type: 'ForStatement';
  init?: VariableDeclaration | Expression | null;
  test?: Expression | null;
  update?: Expression | null;
  body: Statement;
}

export interface WhileStatement extends ASTNode {
  type: 'WhileStatement';
  test: Expression;
  body: Statement;
}

export interface BreakStatement extends ASTNode {
  type: 'BreakStatement';
}

export interface ContinueStatement extends ASTNode {
  type: 'ContinueStatement';
}

export interface FunctionDeclaration extends ASTNode {
  type: 'FunctionDeclaration';
  name: string;
  params: string[];
  body: BlockStatement;
}

export interface ReturnStatement extends ASTNode {
  type: 'ReturnStatement';
  argument?: Expression;
}

export interface TryCatchStatement extends ASTNode {
  type: 'TryCatchStatement';
  block: BlockStatement;
  handler?: {
    param: string;
    body: BlockStatement;
  };
  finalizer?: BlockStatement;
}

export interface ThrowStatement extends ASTNode {
  type: 'ThrowStatement';
  argument: Expression;
}

export type Expression =
  | BinaryExpression
  | UnaryExpression
  | UpdateExpression
  | AssignmentExpression
  | CallExpression
  | MemberExpression
  | ArrayLiteral
  | ObjectLiteral
  | Identifier
  | NumberLiteral
  | StringLiteral
  | BooleanLiteral
  | NullLiteral
  | UndefinedLiteral;

export interface BinaryExpression extends ASTNode {
  type: 'BinaryExpression';
  operator: string;
  left: Expression;
  right: Expression;
}

export interface UnaryExpression extends ASTNode {
  type: 'UnaryExpression';
  operator: string;
  argument: Expression;
  prefix: boolean;
}

export interface UpdateExpression extends ASTNode {
  type: 'UpdateExpression';
  operator: '++' | '--';
  argument: Identifier;
  prefix: boolean;
}

export interface AssignmentExpression extends ASTNode {
  type: 'AssignmentExpression';
  operator: string;
  left: Expression;
  right: Expression;
}

export interface CallExpression extends ASTNode {
  type: 'CallExpression';
  callee: Expression;
  arguments: Expression[];
}

export interface MemberExpression extends ASTNode {
  type: 'MemberExpression';
  object: Expression;
  property: Expression;
  computed: boolean; // true if obj[prop], false if obj.prop
}

export interface ArrayLiteral extends ASTNode {
  type: 'ArrayLiteral';
  elements: Expression[];
}

export interface ObjectProperty {
  key: string;
  value: Expression;
}

export interface ObjectLiteral extends ASTNode {
  type: 'ObjectLiteral';
  properties: ObjectProperty[];
}

export interface Identifier extends ASTNode {
  type: 'Identifier';
  name: string;
}

export interface NumberLiteral extends ASTNode {
  type: 'NumberLiteral';
  value: number;
}

export interface StringLiteral extends ASTNode {
  type: 'StringLiteral';
  value: string;
}

export interface BooleanLiteral extends ASTNode {
  type: 'BooleanLiteral';
  value: boolean;
}

export interface NullLiteral extends ASTNode {
  type: 'NullLiteral';
}

export interface UndefinedLiteral extends ASTNode {
  type: 'UndefinedLiteral';
}
