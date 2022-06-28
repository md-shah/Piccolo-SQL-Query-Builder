export type TBaseModelClass = {
  TableName: string;
};

// Base class with TableName field
export class BaseModelClass implements TBaseModelClass {
  TableName!: string;
}
