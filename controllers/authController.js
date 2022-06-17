const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken');
// Admin LigIn System
const adminLogin = async (req, res) =>{

    const { email, password } = req.body;

    // Check User by email
    const loginData = await Admin.findOne({ email });

    // Now validation email
    if( !loginData ){
        res.status(400).json({
            message : "Email Not Found"
        });
    }else{

        if( await bcrypt.compare(password, loginData.password) ){

            const token = jwt.sign({ id : loginData._id }, process.env.JWT_SECRET, {
                expiresIn : "1d"
            })
    
            res.status(200).json({
                id : loginData._id,
                name : loginData.name,
                email : loginData.email,
                cell : loginData.cell,
                token : token
            });
        }else{
            res.status(401).json({
                message : "Wrong Password"
            }); 
        }
    }
}




module.exports = {
    adminLogin
}