// Generate simple SQL Query
// SELECT * or column1 FROM tableName WHERE column2 = 10;

type Type<T> = T;

type condition = ["=", "<", ">", ">=", "<=", "<>"];

interface IWhereCondition extends Type<[string, condition[number], string]> {}

class GenerateSQL {
  private SQLQuery = "SELECT ";

  constructor() {}

  public Select(tableName: string) {
    this.SQLQuery += ` FROM ${tableName} `;
    return this;
  }

  public Column(...columns: Array<string>) {
    this.SQLQuery += columns.join(" , ");
    return this;
  }

  public Where(...conditions: Array<IWhereCondition>) {
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
  new GenerateSQL()
    .Column("column1")
    .Select("tableName")
    .Where(["column1", "<=", "value"])
    .ToSQL()
);
