import {Model, Table, Column, ForeignKey, BelongsTo, AutoIncrement, PrimaryKey, DataType, CreatedAt, UpdatedAt, BelongsToMany} from 'sequelize-typescript';
import { Item } from './item';

@Table({tableName:'user'})
export class User extends Model<User>{

    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    name!: string;
    
    @Column(DataType.STRING)
    password!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @BelongsTo(() => Item)
    items?: Item[];
}