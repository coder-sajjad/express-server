const mongoose = require('mongoose');

// Admin Model Schema
const adminModel = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name field is Required"]
    },
    email : {
        type : String,
        required : [true, "Email field is Required"],
        unique : true
    },
    cell : {
        type : String,
        required : [true, "Cell field is Reuired"],
        unique : true,
        // match : /^(01|8801|+8801)[0-9]{9}$/
    },
    username : {
        type : String,
        required : [true, "Cell field is Reuired"],
        unique : true,
        lowercase : true,
        minLength : 5,
        maxLength : 10
    },
    location : {
        type : String,
        default : "Dhaka"
    },
    skill : {
        type : String,
        required : [false, "Location field is False"],
        unique : true
    },
    password : String
}, {
    timestamps : true
});



// Export our Admin Model
module.exports = mongoose.model('Admin', adminModel);