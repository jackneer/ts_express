import express from 'express'
import { Application } from 'express'

class App {
    
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        // this.moddlewares(appInit.middleWares)
        // this.routers(appInit.controllers)
        // this.assets()
        // this.template()
    }

    private middlewares(middleWares: { foreach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.foreach(middleWare => {
            this.app.use(middleWare)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('App starts at port:%s', this.port)
        })
    }

}

export default App