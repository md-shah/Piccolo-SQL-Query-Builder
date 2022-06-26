import SetTableName from '../utils/decorator/tableName.decorator';

export class BaseDto {
  public TableName!: string;
}

@SetTableName("user")
export class UserTableDto extends BaseDto {
  id!: number;

  firstName!: string;

  lastName!: string;

  age!: number;
}
