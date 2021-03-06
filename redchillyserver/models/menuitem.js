const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItem = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, default: '', index: { unique: true } },
    price: { type: Number },
    description: { type: String, default: '' },
    category: { type: String, default: '' },
    version: { type: Number, default: 0 },
    isVeg: { type: Boolean, default: 0 },
})

const model = mongoose.model('MenuItem', menuItem);


function MenuItemClass(_id, name, price, description, category, version, isVeg) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.version = version;
    this.isVeg = isVeg;
}


MenuItemClass.prototype.validate = function(obj) {
    const _id = obj._id;
    const name = obj.name;
    const price = obj.price;
    const numbersAddedToCart = obj.numbersAddedToCart;
    const description = obj.description;
    const category = obj.category;
    const version = obj.version;
}


module.exports = {
    model,
    MenuItemClass
};