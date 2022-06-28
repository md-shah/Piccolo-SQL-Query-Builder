import { TBaseModelClass } from '../types/baseClass';
import { IWhereCondition, OmitTableName, TClass } from '../types/common.types';

export class SelectQuery<T extends TBaseModelClass> {
  private genericClass: T;

  private selectQuery = "SELECT";
  private fromQuery = "FROM";
  private whereQuery = " WHERE ";

  constructor(_genericClass: TClass<T>) {
    this.genericClass = new _genericClass();
    this.fromQuery += " " + this.genericClass.TableName;
  }

  public Column(...columns: Array<OmitTableName<T>>) {
    this.selectQuery += " " + columns.join(", ");
    return this;
  }

  public Where(...conditions: Array<IWhereCondition<T>>) {
    const conditionalQuery = conditions
      .map((aCondition) => {
        return aCondition.join(" ");
      })
      .join(" and ");

    this.whereQuery += `${conditionalQuery}`;
    return this;
  }

  public ToSQL() {
    return `${this.selectQuery} ${this.fromQuery} ${this.whereQuery};`;
  }
}
