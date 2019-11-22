import { ICourse } from './ICourse';
import { IFaculty } from './IFaculty';
import { IBaseEntity } from './IBaseEntity';

export interface IStudent extends IBaseEntity {
  course: Promise<ICourse>;
  faculty: Promise<IFaculty>;
}
