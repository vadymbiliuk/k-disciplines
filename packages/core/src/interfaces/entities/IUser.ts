import { IRole } from './IRole';
import { IBaseEntity } from './IBaseEntity';

export interface IUser extends IBaseEntity {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: Promise<IRole>;
}
