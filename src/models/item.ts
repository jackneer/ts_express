import { Model, Table, Column, DataType, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript'
import { User } from './user';

@Table({tableName: 'item'})
export class Item extends Model<Item> {

    @ForeignKey(() => User)
    @Column
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