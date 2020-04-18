import { Sequelize } from 'sequelize-typescript'
import { Item } from './item';
import { User } from './user';

export const sequalize = new Sequelize({
    dialect: 'sqlite',
    storage: ':momory:',
    models: [User, Item],
});