var dao = require('../dao/userOrder.dao');
var varableser = require('../service/variableservice');
const mongoose = require('mongoose');
// dao.connect();

async function getOrderList() {
    return dao.getUserOrderList();
}
async function saveNewUserOrder(order) {
    const isCooking = await varableser.getVariableValue('ISCOOKING');
    console.log(isCooking);
    if (!isCooking) {
        return Promise.reject({
            custom: 'Restaurant is not online.'
        });
    }
    return dao.saveNewUserOrder(order);
}
async function getLatestOrderList(previousLatestTime) {
    return dao.getLatestOrderList(previousLatestTime);
}
async function updateOrderStatus(id, status) {
    return dao.updateOrderStatus(id, status);
}

module.exports = {
    getOrderList,
    saveNewUserOrder,
    getLatestOrderList,
    updateOrderStatus
}