import { Student } from './Student';
import { BaseEntity } from './BaseEntity';
import { Column, OneToMany, Entity } from 'typeorm';
import { ICourse } from '@k-disciplines/core/src/interfaces/entities/ICourse';

@Entity()
export class Course extends BaseEntity implements ICourse {
  @Column({ name: 'course', type: 'int2', nullable: false })
  public course: number;

  @Column({ name: 'semester', type: 'int2', nullable: false })
  public semester: number;
  
  @OneToMany(() => Student, (students) => students.course)
  public students: Promise<Student[]>;

  constructor(
    course: number
  ) {
    super();

    this.course = course;
    this.semester = 0;
  }
}
