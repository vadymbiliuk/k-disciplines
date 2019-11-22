import { Discipline } from './Discipline';
import { BaseEntity } from './BaseEntity';
import { Column, OneToMany, Entity } from 'typeorm';
import { ICategory } from '@k-disciplines/core/src/interfaces/entities/ICategory';

@Entity()
export class Category extends BaseEntity implements ICategory {
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  public name: string;

  @OneToMany(() => Discipline, (discipline) => discipline.category)
  public disciplines: Promise<Discipline[]>;

  constructor(
    name: string
  ) {
    super();

    this.name = name;
  }
}
