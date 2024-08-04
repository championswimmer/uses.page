import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { User } from "../users/user.entity";
import { Usable } from "./usable.entity";

@Entity("user_usables")
@Unique(["user", "usable"])
export class UserUsable {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, user => user.usables)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Usable)
  @JoinColumn({ name: "usable_id" })
  usable!: Usable;
}