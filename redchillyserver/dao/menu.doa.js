const mongoose = require('mongoose');
const MenuItems = require('../models/menuitem').model;



function getMenuItems() {
    MenuItems.find({}, (err, result) => {
        console.log(err, result, "result");
    })
}

function addMultipleMenuItems(menuItems /*Array of item*/ ) {
    MenuItems.collection.insert(menuItems, (err, docs) => {
        if (err) {

        } else {
            console.log(docs)
        }
    })
}


module.exports = {
    getMenuItems,
    addMultipleMenuItems
}