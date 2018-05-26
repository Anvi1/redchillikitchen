var dao = require('../dao/userOrder.dao');
const mongoose = require('mongoose');
// dao.connect();

async function getOrderList() {
    return dao.getUserOrderList();  
}
async function saveNewUserOrder(order) {       
    return dao.saveNewUserOrder(order);    
}
async function getLatestOrderList(previousLatestTime) { 
    return dao.getLatestOrderList(previousLatestTime);
}
async function updateOrderStatus(id,status) { 
    return dao.updateOrderStatus(id,status);
}

module.exports = {
    getOrderList,
    saveNewUserOrder,
    getLatestOrderList,
    updateOrderStatus
}