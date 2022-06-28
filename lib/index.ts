import { SelectQuery } from './query-builder/select';
import { BaseModelClass } from './types/baseClass';
import { TClass } from './types/common.types';

export class piccolo<T extends BaseModelClass> {
  select(_genericClass: TClass<T>) {
    return new SelectQuery<T>(_genericClass);
  }
}
