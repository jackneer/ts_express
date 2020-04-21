import { User } from "./models/user"
import { Item } from "./models/item"

export class Startup {
    constructor() {
        console.log('running startup')
        this.insertDemoData()
    }

    private async insertDemoData() {
        const jack = await User.create({name: 'jack', password: 'pass'})
        const jason = await User.create({name: 'jason', password: 'pass'})

        Item.create({userId: jack.userId, name: 'post 1', content: 'post 1 content'})
        Item.create({userId: jack.userId, name: 'post 2', content: 'post 2 content'})
        Item.create({userId: jason.userId, name: 'post 3', content: 'post 3 content'})
        Item.create({userId: jason.userId, name: 'post 4', content: 'post 4 content'})
    }
}