const mongoose = require('mongoose')

export default async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://everest9k:admin@cluster0.vf864fw.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
          console.log('connected!')
    } catch (error) {
        console.log(error);
    }
}