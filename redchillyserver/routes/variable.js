var express = require('express');
var errors = require('../utils/error-handler');
var success = require('../utils/success-handler');
var variableService = require('./../service/variableservice');
var router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        let variableList = await variableService.getVariableList();
        success.success200(res, variableList);
    } catch (error) {
        errors.hasError500(req, res);
    }
});
router.post('/', async(req, res, next) => {
    try {
        let savedVariable = await variableService.setVariable(req.body);
        success.success200(res, savedVariable);
    } catch (error) {
        errors.hasError500(req, res);
    }
});
router.get('/getvariable/:varname', async(req, res, next) => {
    try {
        let varname = req.params.varname;
        let variableValue = await variableService.getVariableValue(varname);
        success.success200(res, {
            variableValue,
            varname
        });
    } catch (error) {
        errors.hasError500(req, res);
    }
});

router.delete('/', async(req, res, next) => {
    try {
        let variableList = await variableService.deleteVariableList();
        success.success200(res, variableList);
    } catch (error) {
        errors.hasError500(req, res);
    }
});

router.put('/', async(req, res, next) => {
    try {
        let savedVariable = await variableService.updateVariableValue(req.body);
        success.success200(res, savedVariable);
    } catch (error) {
        errors.hasError500(req, res);
    }
});


module.exports = router;