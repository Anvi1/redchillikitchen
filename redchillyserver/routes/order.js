var express = require('express');
var errors = require('../utils/error-handler');
var success = require('../utils/success-handler');
var orderservice = require('../service/orderservice');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) => {
    try {
        var orderlist = await orderservice.getOrderList();
        console.log(orderlist)
        success.success200(res, orderlist);
    } catch (error) {
        errors.hasError500(req, res);
    }
});

module.exports = router;