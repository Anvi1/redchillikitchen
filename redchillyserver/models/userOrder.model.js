const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userOrder = new Schema({
    customerName: String,
    mobileNo: Number,
    address: String,
    billingAmount: Number,
    currentGST: Number,
    orderTime: {type:Number,default: (new Date()).getTime()},
    orderStatus:{type: String, enum: ['NEW','CANCELED','DELIVERED'], default: 'NEW'},
    foodItemList: [{
        name: String,
        price: Number,
        quantity: Number
    }]
});

module.exports = mongoose.model('UserOrder', userOrder);
