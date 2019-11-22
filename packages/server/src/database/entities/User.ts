import { Role } from './Role';
import { BaseEntity } from './BaseEntity';
import { Column, ManyToOne, JoinColumn, Entity } from 'typeorm';
import { IUser } from '@k-disciplines/core/src/interfaces/entities/IUser';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ name: 'email', type: 'varchar', length: 100, nullable: false })
  public email: string;

  @Column({ name: 'password_hash', type: 'varchar', length: 100, nullable: false })
  public passwordHash: string;

  @Column({ name: 'first_name', type: 'varchar', length: 50, nullable: false })
  public firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 50, nullable: false })
  public lastName: string;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  public role: Promise<Role>;

  constructor(
    email: string,
    passwordHash: string,
    firstName: string,
    lastName: string,
  ) {
    super();

    this.email = email;
    this.passwordHash = passwordHash;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
