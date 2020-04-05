import { Request, Response } from 'express'

const loggerMiddleware = (req: Request, res: Response, next: any) => {
    console.log(req.method, req.path)
    next()
}

export default loggerMiddleware