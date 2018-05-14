const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItem = new Schema({
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    price: { type: Number },
    numbersAddedToCart: { type: Number, default: 0 },
    description: { type: String, default: '' },
})