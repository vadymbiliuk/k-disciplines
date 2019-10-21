import { IStudent } from './IStudent';
import { IBaseEntity } from './IBaseEntity';
import { IDiscipline } from './IDiscipline';

export interface IFaculty extends IBaseEntity {
  name: string;
  disciplines: IDiscipline[];
  students: IStudent[];
}
