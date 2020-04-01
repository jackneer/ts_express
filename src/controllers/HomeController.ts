import express from 'express'
import { Request, Response } from 'express'
import IController from './IController'

class HomeController implements IController {
    public path = '/'
    public route = express.Router()

    constructor() {
        this.initRoute()
    }

    public initRoute() {
        this.route.get('/', this.index)
    }

    index = (req: Request, res: Response) => {
        res.send("hello")
    }
}

export default HomeController