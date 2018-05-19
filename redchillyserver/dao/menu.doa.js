const mongoose = require('mongoose');
const MenuItems = require('../models/menuitem').model;

async function getMenuItems() {
    const menulist = await MenuItems.find({});
    return menulist;
}

async function addMultipleMenuItems(menuItems /*Array of item*/ ) {
    const isInserted = await MenuItems.collection.insert(menuItems);
    return isInserted;
}


module.exports = {
    getMenuItems,
    addMultipleMenuItems
}