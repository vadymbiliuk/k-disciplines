import { Student } from './Student';
import { Discipline } from './Discipline';
import { BaseEntity } from './BaseEntity';
import { Column, ManyToMany, OneToMany, Entity } from 'typeorm';
import { IFaculty } from '@k-disciplines/core/src/interfaces/entities/IFaculty';

@Entity()
export class Faculty extends BaseEntity implements IFaculty {
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  public name: string;

  @ManyToMany(() => Discipline, (discipline) => discipline.faculties)
  public disciplines: Promise<Discipline>

  @OneToMany(() => Student, (student) => student.faculty)
  public students: Promise<Student[]>;

  constructor(
    name: string
  ) {
    super();

    this.name = name;
  }
}
