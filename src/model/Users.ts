import { Column, Entity } from 'typeorm';
import { IsString } from 'class-validator';
import { BaseModel } from './BaseModel';

@Entity()
export class User extends BaseModel {
  @Column({ length: 10 })
  @IsString()
  name!: string;
}
