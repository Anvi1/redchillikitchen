const mongoose = require('mongoose');
const MenuItems = require('../models/menuitem').model;


function connect() {
    mongoose.connect('LOL-WILL-NOT-UPDATE-IN-GIT');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected');
    });
}

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
    connect,
    getMenuItems
}