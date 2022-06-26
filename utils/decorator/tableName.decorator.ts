export default function SetTableName(tableName: string) {
  return function (constructor: Function) {
    constructor.prototype.TableName = tableName;
  };
}
