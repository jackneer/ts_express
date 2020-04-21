import express from 'express'
import { Request, Response } from 'express'
import IController from "./IController"
import { User } from '../models/user'
import { Item } from '../models/item'

class ApiController implements IController {
    public path = '/api'
    public router = express.Router()

    constructor() {
        this.initRoute()
    }

    public initRoute() {
        this.router.get('/users', this.users)
        this.router.get('/user/:userId', this.user)
        this.router.get('/items', this.items)
        this.router.get('/item/:itemId', this.item)
    }

    users = async (req: Request, res: Response) => {
        const users = await User.findAll().all();

        res.send(users)
    }
    
    user = async (req: Request, res: Response) => {
        const user = await User.findOne({where: {userId: req.params.userId}, include: [{model: Item}]});

        res.send(user)
    }

    items = async (req: Request, res: Response) => {
        const items = await Item.findAll().all();

        res.send(items)
    }

    item = async (req: Request, res: Response) => {
        const item = await Item.findOne({where: {itemId: req.params.itemId}});

        res.send(item)
    }
}

export default ApiController