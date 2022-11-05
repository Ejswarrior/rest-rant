require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose

const commentSchema = new Schema({
    author:{type: String, required: true},
    rant: {type: Boolean, default: false},
    stars: {type: Number, required: true},
    content: {type: String, default:''}
})

Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment