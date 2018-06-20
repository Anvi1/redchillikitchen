var express = require('express');
var errors = require('../utils/error-handler');
var success = require('../utils/success-handler');
var orderservice = require('../service/orderservice');
var oderModel = require('../models/userOrder.model');
var router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        var orderlist = await orderservice.getOrderList();
        console.log(orderlist)
        success.success200(res, orderlist);
    } catch (error) {
        errors.hasError500(req, res);
    }
});
router.post('/', async(req, res, next) => {
    try {
        const ordersaved = await orderservice.saveNewUserOrder(req.body);
        success.success200(res, ordersaved);
    } catch (error) {
        if (error && error.custom) {
            errors.message(res, error.custom, true);
        } else {
            errors.hasError500(req, res);
        }
    }
});
router.get('/latestOrders/:timestamp', async(req, res, next) => {
    try {
        let previousLatestTime = req.params.timestamp;
        let orderlist = await orderservice.getLatestOrderList(previousLatestTime);
        success.success200(res, orderlist);
    } catch (error) {
        errors.hasError500(req, res);
    }
});
router.post('/updateStatus/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const status = req.body.status;
        const orderupdated = await orderservice.updateOrderStatus(id, status);
        success.success200(res, orderupdated);
    } catch (error) {
        errors.hasError500(req, res);
    }
});

module.exports = router;