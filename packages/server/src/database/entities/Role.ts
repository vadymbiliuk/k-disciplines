import { User } from './User';
import { Student } from './Student';
import { BaseEntity } from './BaseEntity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IRole } from '@umanager/core/src/interfaces/entities/IRole';

@Entity()
export class Role extends BaseEntity implements IRole {
  @Column({ nullable: false })
  public name: string;

  @ManyToOne(() => User, (user) => user.role)
  @JoinColumn({ name: 'users_id' })
  public users: Array<User | Student>

  constructor(
    name: string
  ) {
    super();

    this.name = name;
  }
}
