import { Student } from './Student';
import { Faculty } from './Faculty';
import { Category } from './Category';
import { BaseEntity } from './BaseEntity';
import { Entity, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { IDiscipline } from '@umanager/core/src/interfaces/entities/IDiscipline';

@Entity()
export class Discipline extends BaseEntity implements IDiscipline {
  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: false, name: 'amount_of_max_students'  })
  public amountOfMaxStudents: number;

  @ManyToOne(() => Category, (category) => category.disciplines)
  @JoinColumn({ name: 'category_id' })
  public category: Category;

  @ManyToOne(() => Student, (student) => student.currentDiscipline)
  @JoinColumn({ name: 'students_id' })
  public students: Student[];

  @ManyToMany(() => Faculty)
  public faculties: Faculty[];

  @Column({ nullable: false, name: 'is_non_relevant'  })
  public isNonRelevant: boolean;

  constructor(
    name: string,
    amountOfMaxStudents: number
  ) {
    super();

    this.name = name;
    this.amountOfMaxStudents = amountOfMaxStudents;
    this.isNonRelevant = false;
  }
}
