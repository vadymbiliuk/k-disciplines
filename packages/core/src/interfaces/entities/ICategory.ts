import { IDiscipline } from './IDiscipline';
import { IBaseEntity } from './IBaseEntity';

export interface ICategory extends IBaseEntity {
  name: string;
  disciplines: Promise<IDiscipline[]>;
}
