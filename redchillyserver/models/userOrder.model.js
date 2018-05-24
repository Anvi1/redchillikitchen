const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userOrder = new Schema({
    customerName: String,
    mobileNo: String,
    address: String,
    billingAmount: Number,
    currentGST: Number,
    orderTime: Date,
    foodItemList: [{
        name: String,
        price: Number,
        quantity: Number
    }]
});

const model = mongoose.model('UserOrder', userOrder);

module.exports = { model };