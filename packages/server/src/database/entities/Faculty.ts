import { Student } from './Student';
import { BaseEntity } from './BaseEntity';
import { Discipline } from './Discipline';
import { IFaculty } from '@umanager/core/src/interfaces/entities/IFaculty';
import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Faculty extends BaseEntity implements IFaculty {
  @Column({ nullable: false })
  public name: string;

  @ManyToMany(() => Discipline, (discipline) => discipline.faculties)
  @JoinTable({
    name: 'faculty_disciplines',
    joinColumn: { name: 'faculty_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'discipline_id', referencedColumnName: 'id' },
  })
  public disciplines: Discipline[];

  @OneToMany(() => Student, (student) => student.faculty)
  public students: Student[];

  constructor(
    name: string,
  ) {
    super();

    this.name = name;
  }
}
