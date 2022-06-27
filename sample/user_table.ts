import SetTableName from '../utils/decorator/tableName.decorator';

export type BaseDto = {
  TableName: string;
};

export type IUserTableDto = {
  TableName: string;
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

@SetTableName("user")
export class UserTableDto implements BaseDto {
  TableName!: string;

  id!: number;

  firstName!: string;

  lastName!: string;

  age!: number;
}
