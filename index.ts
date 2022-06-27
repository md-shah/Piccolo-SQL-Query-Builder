// Generate simple SQL Query
// SELECT * or column1 FROM tableName WHERE column2 = 10;

import { BaseDto, IUserTableDto, UserTableDto } from './sample/user_table';

type Type<T> = T;

type OmitTableName<T> = keyof Omit<T, "TableName">;
export interface Class<T> extends Function {
  new (...args: any[]): T;
}

type condition = ["=", "<", ">", ">=", "<=", "<>"];

interface IWhereCondition<T>
  extends Type<[OmitTableName<T>, condition[number], string]> {}

class GenerateSQL<T extends BaseDto> {
  private SQLQuery = "SELECT ";
  private genericClass: T;

  constructor(_genericClass: Class<T>) {
    this.genericClass = new _genericClass();
  }

  public Select() {
    this.SQLQuery += ` FROM ${this.genericClass.TableName} `;
    return this;
  }

  // public Column(...columns: Array<Omit<T, "TableName">>) {
  public Column(...columns: Array<OmitTableName<T>>) {
    this.SQLQuery += columns.join(" , ");
    return this;
  }

  public Where(...conditions: Array<IWhereCondition<T>>) {
    const conditionalQuery = conditions
      .map((aCondition) => {
        return aCondition.join(" ");
      })
      .join(" and ");

    this.SQLQuery += ` WHERE ${conditionalQuery}`;
    return this;
  }

  public ToSQL() {
    return `${this.SQLQuery};`;
  }
}

console.log(
  new GenerateSQL<IUserTableDto>(UserTableDto)
    .Column("age", "firstName", "id")
    .Select()
    .Where(["age", "<=", "value"], ["firstName", "=", "'shah'"])
    .ToSQL()
  // Output - SELECT age , firstName , id FROM user  WHERE age <= value and firstName = 'shah';
);
