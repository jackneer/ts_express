import { Model, Table, Column, DataType, CreatedAt, UpdatedAt, ForeignKey, PrimaryKey, AutoIncrement, HasOne, BelongsTo } from 'sequelize-typescript'
import { User } from './user';

@Table({tableName: 'item'})
export class Item extends Model<Item> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    itemId!:number

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId!: number

    @Column(DataType.STRING)
    name!: string

    @Column(DataType.TEXT)
    content!:string

    @CreatedAt
    createdAt!: Date

    @UpdatedAt
    updatedAt!: Date

    @BelongsTo(() => User)
    user!: User

    toJSON() {
        var attributes: any = Object.assign({}, this.get())
        delete attributes.user.password

        return attributes
    }
}