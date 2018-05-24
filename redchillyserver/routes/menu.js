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
        const isInserted = await menuservice.addMultipleMenuItems(menulist);
        success.success200(res, isInserted);
    } catch (error) {
        const hasUniqueError = error.code === 11000;
        if (hasUniqueError) {
            errors.message(res, "You cannot have two items having same name!")
            return;
        }
        errors.hasError500(req, res);
    }
});

router.delete('/', async(req, res, next) => {
    var menulist;
    try {
        var menulist = await menuservice.deleteMenuList();
        success.success200(res, menulist);
    } catch (error) {
        console.log(error)
        errors.hasError500(req, res);
    }
});

module.exports = router;