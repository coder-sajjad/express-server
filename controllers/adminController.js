const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');



// Get All Admin
const getAllAdmin = async (req, res) => {
    let data = await Admin.find();
    res.status(200).json(data);
}

// Single Admin
const getSingleAdmin = async (req, res) => {
    let data = await Admin.findById(req.params.id);
    res.status(200).json(data);
}

// Create Admin
const createAdmin = async (req, res) => {
    const { name, email, skill, cell, location, username, password } = req.body;

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if( !name || !email || !password || !username || !cell ){
        res.status(400).json({
            message : "All Fields are Required"
        });
    }else{
        await Admin.create({
            ...req.body,
            password : hashPassword
        });
        res.status(200).json({
            message : "Admin Data Created Successful"
        });
    }
}

// Update Admin
const updateAdmin = async (req, res) => {
    let id = req.params.id;
    await Admin.findByIdAndUpdate(id, req.body, {
        new : true
    });
    
    res.status(200).json({
        message : "Student Data updated"
    });
}

// Delete Admin
const deleteAdmin = async (req, res) => {
    
    const delete_data = Admin.findByIdAndDelete(req.params.id);
    if( !delete_data ){
        res.status(400).json({
            message : "Delete data not found"
        });
    }else{
        const data = await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message : `Delete ${data.name} data`
        });
    };
}


// Admin Profile
const adminProfile = async (req, res) => {
    
   await res.json(req.user);
}

// Admin Home page
const adminHome = async (req, res) => {

    await res.json(req.user);
    
}


// Export Admin
module.exports = {
    getAllAdmin,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    adminProfile,
    adminHome
}