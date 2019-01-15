const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = Schema({
  name: {type: String, required: true, minlength: 2 },
  owner: { type: String, required: false },
  age: { type: String, required: true }

}, {timestamps: true})

module.exports = mongoose.model('Cat', catSchema)