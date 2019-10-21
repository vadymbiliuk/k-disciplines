import { IStudent } from './IStudent';
import { IBaseEntity } from './IBaseEntity';

export interface ICourse extends IBaseEntity {
  course: number;
  semester: number;
  students: IStudent[];
}
