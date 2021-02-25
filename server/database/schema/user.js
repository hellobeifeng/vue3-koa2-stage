const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  age: Number
}, { collection: 'user'})

mongoose.model('User', UserSchema)
