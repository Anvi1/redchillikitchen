var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var projectVariableSchema = new Schema({
   varialble_name:String,
   variable_value:Schema.Types.Mixed        
    
});

module.exports = mongoose.model("ProjectVariable",projectVariableSchema); 