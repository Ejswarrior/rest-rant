const mongoose = require('mongoose')

module.exports.Place = require('./modPlaces')
const { Schema } = mongoose

const placeSchema = new Schema({
    name: {type: String, required: true},
    pic: {type: String},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: {type: Number}
})
const Place = mongoose.model('Place', placeSchema)
module.exports = Place




