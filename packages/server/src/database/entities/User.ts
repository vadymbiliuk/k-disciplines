import { Role } from './Role';
import { BaseEntity } from './BaseEntity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IUser } from '@umanager/core/src/interfaces/entities/IUser';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ nullable: false })
  public email: string;

  @Column({ nullable: false, name: 'password_hash' })
  public passwordHash: string;

  @Column({ nullable: false, name: 'first_name' })
  public firstName: string;

  @Column({ nullable: false, name: 'last_name'  })
  public lastName: string;

  @Column({ nullable: false, name: 'is_banned'  })
  public isBanned: boolean;

  @Column({ nullable: false, name: 'is_email_confirmed'  })
  public isEmailConfirmed: boolean;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  public role: Role;

  constructor(
    email: string,
    passwordHash: string,
    firstName: string,
    lastName: string,
    role: Role
  ) {
    super();

    this.email = email;
    this.passwordHash = passwordHash;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isBanned = false;
    this.isEmailConfirmed = false;
    this.role = role;
  }
}
