import { User } from "./models/user"
import { Item } from "./models/item"

export class Startup {
    constructor() {
        console.log('running startup')
        this.insertDemoData()
    }

    private insertDemoData() {
        const jack = User.create({name: 'jack', password: 'pass'})
        const jason = User.create({name: 'jason', password: 'pass'})

        Item.create({user: jack, name: 'post 1', content: 'post 1 content'})
        Item.create({user: jack, name: 'post 2', content: 'post 2 content'})

        Item.create({user: jason, name: 'post 3', content: 'post 3 content'})
        Item.create({user: jason, name: 'post 4', content: 'post 4 content'})
    }
}