import { IFaculty } from './IFaculty';
import { IStudent } from './IStudent';
import { ICategory } from './ICategory';
import { IBaseEntity } from './IBaseEntity';

export interface IDiscipline extends IBaseEntity {
  name: string;
  amountOfMaxStudents: number;
  category: ICategory;
  students: IStudent[];
  faculties: IFaculty[];
  isNonRelevant: boolean;
}
