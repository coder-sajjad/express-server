const mongoose = require('mongoose');


// Students Model Variable
const studentModel = mongoose.Schema({
    name    : String,
    age     : Number,
    skill   : String,
    location: String
}, {
    timestamps : true
});



module.exports = mongoose.model('Students', studentModel);