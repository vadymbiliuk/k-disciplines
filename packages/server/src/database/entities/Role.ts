import { User } from './User';
import { Student } from './Student';
import { BaseEntity } from './BaseEntity';
import { Column, OneToMany, Entity } from 'typeorm';
import { IRole } from '@k-disciplines/core/src/interfaces/entities/IRole';

@Entity()
export class Role extends BaseEntity implements IRole {
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  public name: string;
  
  @OneToMany(() => User, (user) => user.role)
  public users: Promise<User[] | Student[]>;

  constructor(
    name: string
  ) {
    super();

    this.name = name;
  }
}
