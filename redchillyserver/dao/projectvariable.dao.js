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
    return await ProjectVariable.find({ varialble_name: varname });
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