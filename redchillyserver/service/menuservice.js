var dao = require('../dao/menu.doa');

function getMenuList() {
    dao.connect(); // not finished yet
}



module.exports = {
    getMenuList: getMenuList
}