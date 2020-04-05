import App from './app'
import HomeController from './controllers/HomeController'
import ApiController from './controllers/ApiController'
import loggerMiddleware from './middleware/logger'
import bodyParser from 'body-parser'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new ApiController()
    ],
    middleWares: [
        loggerMiddleware,
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
})

app.listen()