var express = require('express');
var menuservice = require('../service/menuservice');
var errors = require('../utils/error-handler');
var success = require('../utils/success-handler');

var router = express.Router();

router.get('/', async(req, res, next) => {
    var menulist;
    try {
        var menulist = await menuservice.getMenuList();
        success.success200(res, menulist);
    } catch (error) {
        errors.hasError500(req, res);
    }
});


router.post('/', async(req, res, next) => {
    const menulist = req.body;
    if (!menulist || !menulist.length || !(menulist instanceof Array)) {
        errors.message(res, 'Menu list is empty!!');
        return;
    }

    //TODO: Validation 
    const isValid = menulist
        .every((i) => i)

    try {
        await menuservice.addMultipleMenuItems(menulist);
        success.success200(res, menulist);
    } catch (error) {
        errors.hasError500(req, res);
    }
});

module.exports = router;