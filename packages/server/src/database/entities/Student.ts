import { User } from './User';
import { Role } from './Role';
import { Course } from './Course';
import { Faculty } from './Faculty';
import { Discipline } from './Discipline';
import { IStudent } from '@umanager/core/src/interfaces/entities/IStudent';
import { 
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable, 
} from 'typeorm';

@Entity()
export class Student extends User implements IStudent {
  @ManyToOne(() => Course, (course) => course.students)
  @JoinColumn({ name: 'course_id' })
  public course: Course;

  @ManyToOne(() => Faculty, (faculty) => faculty.students)
  @JoinColumn({ name: 'faculty_id' })
  public faculty: Faculty;

  @OneToMany(() => Discipline, (discipline) => discipline.students)
  @JoinColumn({ name: 'current_discipline_id' })
  public currentDiscipline: Discipline;

  @ManyToMany(() => Discipline)
  @JoinTable({
    name: 'graduated_disciplines',
    joinColumn: { name: 'students_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'disciplines_id', referencedColumnName: 'id' },
  })
  public graduatedDisciplines: Discipline[];

  constructor(
    email: string,
    passwordHash: string,
    firstName: string,
    lastName: string,
    role: Role,
    course: Course,
  ) {
    super(
      email,
      passwordHash,
      firstName,
      lastName,
      role
    );

    this.course = course;
  }
}
