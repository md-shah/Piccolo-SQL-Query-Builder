// Conditional Operators
type condition = ["=", "<", ">", ">=", "<=", "<>"];

// Generic Type of T, which accepts everything
export type Type<T> = T;

// Type to display properties of Model except "Tablename"
export type OmitTableName<T> = keyof Omit<T, "TableName">;

// Where condition format - [column, condtion, value]
export interface IWhereCondition<T>
  extends Type<[OmitTableName<T>, condition[number], string]> {}

// Interface to denote a class with its constructor function
export interface TClass<T> extends Function {
  new (...args: any[]): T;
}
