var ProjectVariable = require('./../models/projectVariables.model');

async function getVariableList(){
    return await ProjectVariable.find({},{_id:0});
};
async function setVariable(vObj){   
    const newVariable=new ProjectVariable();
    newVariable.varialble_name=vObj.varialble_name;  
    newVariable.variable_value=vObj.variable_value; 
    return await newVariable.save();
};

async function getVariableValue(varname){
    return await ProjectVariable.find({varialble_name:varname});
};

module.exports={
    getVariableList,
    setVariable,
    getVariableValue    
};