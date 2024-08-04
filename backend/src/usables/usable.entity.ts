import { IsBoolean, IsEnum, IsNumber, IsOptional, IsUrl } from 'class-validator'
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

export enum UsableType {
  SOFTWARE = 'software',
  HARDWARE = 'hardware',
  GEAR = 'gear',
}

export enum UsablePricePeriod {
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

@Entity({ name: 'usables' })
export class Usable extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  brand!: string

  @Column({
    enum: UsableType,
    default: UsableType.SOFTWARE,
  })
  @IsEnum(UsableType)
  type!: UsableType

  @Column()
  free!: boolean

  @Column({ default: false })
  @IsBoolean()
  subscription!: boolean

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  price?: number

  @Column({
    enum: UsablePricePeriod,
    nullable: true
  })
  @IsEnum(UsablePricePeriod)
  @IsOptional()
  pricePeriod?: 'week' | 'month' | 'year'

  @Column()
  @IsUrl()
  link?: string // Stored as string, but should be validated as URL
}
