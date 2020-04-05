import express from 'express'
import { Request, Response } from 'express'
import IController from "./IController";

class ApiController implements IController {
    public path = '/api'
    public router = express.Router()

    constructor() {
        this.initRoute()
    }

    public initRoute() {
        this.router.get('/index', this.index)
    }

    index = (req: Request, res: Response) => {
        res.send("hello")
    }
}

export default ApiController