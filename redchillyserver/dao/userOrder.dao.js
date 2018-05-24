const mongoose = require('mongoose');
const userOrder = require('./../models/userOrder.model');

async function saveNewUserOrder(newOrder){
    const isInserted = await userOrder.collection.insert(newOrder);
    return isInserted;
};
async function getUserOrderList(newOrder){
    const menulist = await userOrder.find({});
    return menulist;
};

module.exports = {
    saveNewUserOrder,
    getUserOrderList
};