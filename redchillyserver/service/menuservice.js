var dao = require('../dao/menu.doa');
const mongoose = require('mongoose');
const MenuItemClass = require('../models/menuitem').MenuItemClass;
// dao.connect();

function getMenuList() {
    dao.getMenuItems();
    // not finished yet
}

function addMultipleMenuItems(menuItems) {
    const menulist = menuItems.map((i) => {
        return new MenuItemClass(
            new mongoose.Types.ObjectId(),
            i.name,
            i.price,
            i.numbersAddedToCart,
            i.description,
            i.category,
            i.version
        )
    })
    dao.addMultipleMenuItems(menulist)
}



module.exports = {
    getMenuList,
    addMultipleMenuItems
}