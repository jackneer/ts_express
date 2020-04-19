import App from './app'
import HomeController from './controllers/HomeController'
import ApiController from './controllers/ApiController'
import loggerMiddleware from './middleware/logger'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import { sequelize } from './models/sequelize'

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

sequelize.sync({force: true})

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new ApiController()
    ],
    middleWares: [
        cors(),
        morgan('combined', { stream: accessLogStream }),
        loggerMiddleware,
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
})

sequelize.addHook('afterBulkSync', () => {
    app.listen()
})

