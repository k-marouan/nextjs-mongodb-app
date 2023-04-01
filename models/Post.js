const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    details: String,
    user: String,
    age: Number
})

// if exists : get table Post from database else create it!
export default mongoose.models.Post || mongoose.model('Post', postSchema)