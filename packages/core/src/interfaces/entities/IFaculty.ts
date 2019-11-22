import { IStudent } from './IStudent';
import { IDiscipline } from './IDiscipline';
import { IBaseEntity } from './IBaseEntity';

export interface IFaculty extends IBaseEntity {
  name: string;
  disciplines: Promise<IDiscipline>;
  students: Promise<IStudent[]>;
}
