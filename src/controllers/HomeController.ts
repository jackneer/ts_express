import express from 'express'
import { Request, Response } from 'express'
import IController from './IController'

class HomeController implements IController {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoute()
    }

    public initRoute() {
        this.router.get('/', this.index)
    }

    index = (req: Request, res: Response) => {
        res.send("hello world")
    }
}

export default HomeController