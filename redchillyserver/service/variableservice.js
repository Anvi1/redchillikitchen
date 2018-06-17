var ProjectVariableDao = require('./../dao/projectvariable.dao');

async function getVariableList() {
    return ProjectVariableDao.getVariableList();
};
async function setVariable(vObj) {
    return ProjectVariableDao.setVariable(vObj);
};

async function getVariableValue(varname) {
    return ProjectVariableDao.getVariableValue(varname);
};

async function deleteVariableList() {
    return ProjectVariableDao.deleteVariableList();
};

async function updateVariableValue(vObj) {
    return ProjectVariableDao.updateVariableValue(vObj);
};

deleteVariableList

module.exports = {
    getVariableList,
    setVariable,
    getVariableValue,
    deleteVariableList,
    updateVariableValue,
};