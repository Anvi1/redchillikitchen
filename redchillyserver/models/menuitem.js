const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItem = new Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, default: '' },
    price: { type: Number },
    numbersAddedToCart: { type: Number, default: 0 },
    description: { type: String, default: '' },
    category: { type: String, default: '' }
})

const model = mongoose.model('MenuItem', menuItem);

module.exports = model;