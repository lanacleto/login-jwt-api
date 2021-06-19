import mongoose from 'mongoose'
require('dotenv').config()

class Database {
    constructor() {
        this.init()
    }
    init() {
        mongoose.connect(process.env.CONNECTION_STRING, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
    }
}

export default new Database()