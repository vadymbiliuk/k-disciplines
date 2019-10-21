import { BaseEntity } from './BaseEntity';
import { Discipline } from './Discipline';
import { Entity, Column, OneToMany } from 'typeorm';
import { ICategory } from '@umanager/core/src/interfaces/entities/ICategory';

@Entity()
export class Category extends BaseEntity implements ICategory {
  @Column({ nullable: false })
  public name: string;

  @OneToMany(() => Discipline, (discipline) => discipline.category)
  public disciplines: Discipline[];

  constructor(
    name: string,
  ) {
    super();

    this.name = name;
  }
}
