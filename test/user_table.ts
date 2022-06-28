import { piccolo } from '../lib';
import SetTableName from '../lib/decorator/tableName.decorator';

export type IUserTableDto = {
  TableName: string;
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

@SetTableName("user")
export class UserTableDto {
  TableName!: string;
  id!: number;
  firstName!: string;
  lastName!: string;
  age!: number;
}

// Entry Point
const PiccoloSelect = new piccolo<IUserTableDto>().select(UserTableDto);

// Output - SELECT lastName , firstName , id  FROM user  WHERE age <= $value and firstName = 'shah';
console.log(
  PiccoloSelect.Column("firstName", "lastName", "id")
    .Where(["age", "<=", "35"], ["firstName", "=", `'shah'`])
    .ToSQL()
);
