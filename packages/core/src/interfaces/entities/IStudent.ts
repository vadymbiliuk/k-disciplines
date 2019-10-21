import { IUser } from './IUser';
import { ICourse } from './ICourse';
import { IFaculty } from './IFaculty';
import { IDiscipline } from './IDiscipline';

export interface IStudent extends IUser {
  course: ICourse;
  faculty: IFaculty;
  currentDiscipline: IDiscipline;
  graduatedDisciplines: IDiscipline[];
}
