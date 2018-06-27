var ProjectVariable = require('./../models/projectVariables.model');

async function getVariableList() {
    return await ProjectVariable.find({}, { _id: 0 });
};
async function setVariable(vObj) {
    const newVariable = new ProjectVariable();
    newVariable.varialble_name = vObj.varialble_name;
    newVariable.variable_value = vObj.variable_value;
    return await newVariable.save();
};

async function getVariableValue(varname) {
    const value = await ProjectVariable.findOne({ varialble_name: varname });
    if (!value || !value.variable_value) {
        return null;
    }
    return value.variable_value;
};

async function updateVariableValue(vObj) {
    const newVariable = {};
    newVariable.varialble_name = vObj.varialble_name;
    newVariable.variable_value = vObj.variable_value;
    return await ProjectVariable.findOneAndUpdate({ varialble_name: vObj.varialble_name }, newVariable);
};

async function deleteVariableList() {
    const varlist = await ProjectVariable.remove({});
    return varlist;
}

const initvar = {
    "varialble_name": "ISCOOKING",
    "variable_value": false
}
const CGST = {
    "varialble_name": "CGST",
    "variable_value": 0
}
const SGST = {
    "varialble_name": "SGST",
    "variable_value": 0
}
getVariableValue(CGST.varialble_name).then((val) => {
    if (!val) {
        setVariable(CGST);
    }
})
getVariableValue(SGST.varialble_name).then((val) => {
    if (!val) {
        setVariable(SGST);
    }
})
updateVariableValue(initvar).then((err, result) => {
    if (!result && !err) {
        setVariable(initvar)
    }
})

module.exports = {
    getVariableList,
    setVariable,
    getVariableValue,
    updateVariableValue,
    deleteVariableList,
};