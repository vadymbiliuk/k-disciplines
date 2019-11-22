import { IUser } from './IUser';
import { IStudent } from './IStudent';
import { IBaseEntity } from './IBaseEntity';

export interface IRole extends IBaseEntity {
  name: string;
  users: Promise<IUser[] | IStudent[]>;
}
