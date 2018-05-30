var ProjectVariableDao = require('./../dao/projectvariable.dao');

async function getVariableList(){
  return  ProjectVariableDao.getVariableList();
};
async function setVariable(vObj){
  return  ProjectVariableDao.setVariable(vObj);
};

async function getVariableValue(varname){
  return  ProjectVariableDao.getVariableValue(varname);
};

module.exports={
    getVariableList,
    setVariable,
    getVariableValue        
};