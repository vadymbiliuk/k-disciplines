import { IFaculty } from './IFaculty';
import { ICategory } from './ICategory';
import { IBaseEntity } from './IBaseEntity';

export interface IDiscipline extends IBaseEntity {
  name: string;
  maxAmountOfStudents: number;
  possibleSemesters: number[];
  category: Promise<ICategory>;
  faculties: Promise<IFaculty[]>;
}
