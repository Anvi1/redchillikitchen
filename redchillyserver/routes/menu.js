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

module.exports = router;