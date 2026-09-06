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
  | 'ClassDeclaration'
  | 'ClassMethod'
  | 'ConstructorMethod'
  | 'SwitchStatement'
  | 'SwitchCase'
  | 'ImportDeclaration'
  | 'ExportDeclaration'
  | 'BinaryExpression'
  | 'UnaryExpression'
  | 'UpdateExpression'
  | 'AssignmentExpression'
  | 'CallExpression'
  | 'NewExpression'
  | 'ThisExpression'
  | 'AwaitExpression'
  | 'ArrowFunctionExpression'
  | 'ConditionalExpression'
  | 'TemplateLiteral'
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
  | ThrowStatement
  | ClassDeclaration
  | SwitchStatement
  | ImportDeclaration
  | ExportDeclaration;

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
  alternate?: Statement;
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
  isAsync?: boolean;
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

// OOP / Class AST
export interface ConstructorMethod extends ASTNode {
  type: 'ConstructorMethod';
  params: string[];
  body: BlockStatement;
}

export interface ClassMethod extends ASTNode {
  type: 'ClassMethod';
  name: string;
  params: string[];
  body: BlockStatement;
  isAsync?: boolean;
}

export interface ClassDeclaration extends ASTNode {
  type: 'ClassDeclaration';
  name: string;
  superClass?: Identifier;
  constructorMethod?: ConstructorMethod;
  methods: ClassMethod[];
}

// Switch / Case
export interface SwitchCase extends ASTNode {
  type: 'SwitchCase';
  test?: Expression | null; // null for 'bawaan' (default)
  consequent: Statement[];
}

export interface SwitchStatement extends ASTNode {
  type: 'SwitchStatement';
  discriminant: Expression;
  cases: SwitchCase[];
}

// Modules
export interface ImportSpecifier {
  imported: string;
  local: string;
}

export interface ImportDeclaration extends ASTNode {
  type: 'ImportDeclaration';
  specifiers: ImportSpecifier[];
  defaultSpecifier?: string;
  source: string;
}

export interface ExportDeclaration extends ASTNode {
  type: 'ExportDeclaration';
  declaration?: Statement;
  isDefault?: boolean;
}

export type Expression =
  | BinaryExpression
  | UnaryExpression
  | UpdateExpression
  | AssignmentExpression
  | CallExpression
  | NewExpression
  | ThisExpression
  | AwaitExpression
  | ArrowFunctionExpression
  | ConditionalExpression
  | TemplateLiteral
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

export interface NewExpression extends ASTNode {
  type: 'NewExpression';
  callee: Expression;
  arguments: Expression[];
}

export interface ThisExpression extends ASTNode {
  type: 'ThisExpression';
}

export interface AwaitExpression extends ASTNode {
  type: 'AwaitExpression';
  argument: Expression;
}

export interface ArrowFunctionExpression extends ASTNode {
  type: 'ArrowFunctionExpression';
  params: string[];
  body: BlockStatement | Expression;
  isAsync?: boolean;
}

export interface ConditionalExpression extends ASTNode {
  type: 'ConditionalExpression';
  test: Expression;
  consequent: Expression;
  alternate: Expression;
}

export interface TemplateElement {
  raw: string;
}

export interface TemplateLiteral extends ASTNode {
  type: 'TemplateLiteral';
  quasis: string[];
  expressions: Expression[];
}

export interface MemberExpression extends ASTNode {
  type: 'MemberExpression';
  object: Expression;
  property: Expression;
  computed: boolean;
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
