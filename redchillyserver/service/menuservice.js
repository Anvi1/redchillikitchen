var dao = require('../dao/menu.doa');
const mongoose = require('mongoose');
const MenuItemClass = require('../models/menuitem').MenuItemClass;
// dao.connect();

async function getMenuList() {
    const menulist = dao.getMenuItems();
    return menulist;
}

async function addMultipleMenuItems(menuItems) {
    const menulist = menuItems.map((i) => {
        return new MenuItemClass(
            new mongoose.Types.ObjectId(),
            i.name,
            i.price,
            i.description,
            i.category,
            i.version,
            i.isVeg
        )
    })
    return dao.addMultipleMenuItems(menulist)
}

async function deleteMenuList() {
    const menulist = dao.deleteMenuList();
    return menulist;
}



module.exports = {
    getMenuList,
    addMultipleMenuItems,
    deleteMenuList
}