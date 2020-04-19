import { Model, Table, Column, DataType, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript'
import { User } from './user';

@Table({tableName: 'item'})
export class Item extends Model<Item> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    postId!:number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId!: number;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.TEXT)
    content!:string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;
}