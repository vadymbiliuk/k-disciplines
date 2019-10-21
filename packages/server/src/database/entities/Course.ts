import { Student } from './Student';
import { BaseEntity } from './BaseEntity';
import { ICourse } from '@umanager/core/src/interfaces/entities/ICourse';
import { Entity, Column, AfterLoad, BeforeInsert, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Course extends BaseEntity implements ICourse {
  @Column({ nullable: false })
  public course: number;

  @Column({ nullable: false })
  public semester: number;

  @OneToMany(() => Student, (student) => student.course)
  @JoinColumn({ name: 'students_id' })
  public students: Student[];

  @AfterLoad()
  @BeforeInsert()
  updateSemester() {
    const today = new Date();
    const currentMonth = today.getUTCMonth();
    const halfOfStudyYear = currentMonth > 6 ? 1 : 2;

    this.semester = this.course + halfOfStudyYear;
  }

  constructor() {
    super();
  }
}
