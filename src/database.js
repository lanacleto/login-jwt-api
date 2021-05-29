import mongoose from 'mongoose'

class Database {
    constructor() {
        this.init()
    }
    init() {
        mongoose.connect("mongodb+srv://luizanacleto:jacare23@authapi.xbjhc.mongodb.net/userDB?retryWrites=true&w=majority", { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
    }
}

export default new Database()