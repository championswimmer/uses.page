import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { UserUsable } from '../usables/user-usable.entity'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  username!: string

  @Column({ unique: true })
  email!: string

  @Column()
  password!: string

  @OneToMany(() => UserUsable, (userUsable: UserUsable) => userUsable.user)
  usables!: UserUsable[]

  toJSON() {
    return { ...this, password: undefined }
  }
}
