import express from 'express'
import { Request, Response } from 'express'
import IController from "./IController";
import { User } from '../models/user';
import { Item } from '../models/item';

class ApiController implements IController {
    public path = '/api'
    public router = express.Router()

    constructor() {
        this.initRoute()
    }

    public initRoute() {
        this.router.get('/users', this.users)
        this.router.get('/items', this.items)
    }

    users = async (req: Request, res: Response) => {
        const users = await User.findAll().all();

        res.send(users)
    }

    items = async (req: Request, res: Response) => {
        const items = await Item.findAll().all();

        res.send(items)
    }
}

export default ApiController