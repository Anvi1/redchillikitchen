var mongoose = require('mongoose');
var UserOrder = require('./../models/userOrder.model');

async function saveNewUserOrder(order){ 
    const newOrder = new UserOrder();   
    newOrder.customerName = order.customerName;   
    newOrder.mobileNo = order.mobileNo;
    newOrder.address = order.address;
    newOrder.billingAmount = order.billingAmount;
    newOrder.currentGST = order.currentGST;    
    newOrder.foodItemList = order.foodItemList;
    const isInserted = await newOrder.save();   
    return isInserted;
};
async function getUserOrderList(newOrder){
    const orderlist = await UserOrder.find({});
    return orderlist;
};
async function getLatestOrderList(previousLatestTime){
    const orderlist = await UserOrder.find({orderTime:{$gt:previousLatestTime}});
    return orderlist; 
};
async function updateOrderStatus(id,status){
    const orderUpdated = await UserOrder.update({_id:id},{$set:{orderStatus:status}});
    return orderUpdated; 
};

module.exports = {
    saveNewUserOrder,
    getUserOrderList,
    getLatestOrderList,
    updateOrderStatus
};