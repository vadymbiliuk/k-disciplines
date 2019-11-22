import { Faculty } from './Faculty';
import { Category } from './Category';
import { BaseEntity } from './BaseEntity';
import { IDiscipline } from '@k-disciplines/core/src/interfaces/entities/IDiscipline';
import { Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, Entity } from 'typeorm';

@Entity()
export class Discipline extends BaseEntity implements IDiscipline {
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  public name: string;

  @Column({ name: 'max_amount_of_students', type: 'int2', nullable: false })
  public maxAmountOfStudents: number;

  @Column({ name: 'amount_of_possible_semesters', type: 'simple-array', nullable: false })
  public possibleSemesters: number[];

  @ManyToOne(() => Category, (category) => category.disciplines)
  @JoinColumn({ name: 'category_id' })
  public category: Promise<Category>

  @ManyToMany(() => Faculty, (faculty) => faculty.disciplines)
  @JoinTable({ 
    name: 'faculty_disciplines', 
    joinColumn: {
      name: 'discipline_id', 
    },
    inverseJoinColumn: {
      name: 'faculty_id', 
    }, 
  })
  public faculties: Promise<Faculty[]>;

  constructor(
    name: string,
    maxAmountOfStudents: number,
    possibleSemesters: number[]
  ) {
    super();

    this.name = name;
    this.maxAmountOfStudents = maxAmountOfStudents,
    this.possibleSemesters = possibleSemesters;
  }
}

