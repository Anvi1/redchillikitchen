var dao = require('../dao/userOrder.dao');
const mongoose = require('mongoose');
// dao.connect();

async function getOrderList() {
    const menulist = dao.getUserOrderList();
    return menulist;
}
async function saveNewUserOrder(order) { 
    return dao.saveNewUserOrder();
}

module.exports = {
    getOrderList,
    saveNewUserOrder
}