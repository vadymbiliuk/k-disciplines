import { User } from './User';
import { Course } from './Course';
import { Faculty } from './Faculty';
import { ManyToOne, JoinColumn, Entity } from 'typeorm';
import { IStudent } from '@k-disciplines/core/src/interfaces/entities/IStudent';

@Entity()
export class Student extends User implements IStudent {
  @ManyToOne(() => Course, (course) => course.students)
  @JoinColumn({ name: 'course_id' })
  public course: Promise<Course>;

  @ManyToOne(() => Faculty, (faculty) => faculty.students)
  @JoinColumn({ name: 'faculty_id' })
  public faculty: Promise<Faculty>;

  constructor(
    email: string,
    passwordHash: string,
    firstName: string,
    lastName: string,
  ) {
    super(
      email,
      passwordHash,
      firstName,
      lastName
    );
  }
}
