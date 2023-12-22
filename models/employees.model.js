const mongoose = require('mongoose');

//Schema definition
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
    
    },
    address: {
        type: String,
        required: true,
       
    },
    
    
});

//Model creation
module.exports = mongoose.model('employees', employeeSchema);
