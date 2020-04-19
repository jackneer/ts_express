import {Model, Table, Column, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey, DataType, CreatedAt, UpdatedAt, BelongsToMany, HasMany} from 'sequelize-typescript';
import { Item } from './item';

@Table({tableName:'user'})
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    userId!: number;

    @Column(DataType.STRING)
    name!: string;
    
    @Column(DataType.STRING)
    password!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @HasMany(() => Item)
    items!: Item[]
}