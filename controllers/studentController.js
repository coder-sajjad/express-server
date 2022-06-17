const fs = require('fs');
const path = require('path');
const Student = require('../models/studentModel');


// Student Data Model
const students = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/students.json')).toString());

// Get Latest ID
const getLatestId = () =>{
    if( students.length > 0 ){
        return students[students.length - 1].id + 1;
    }else{
        return 1;
    }
}


// Get All Students
const getAllStudents = async (req, res) => {
    let data = await Student.find();
    res.status(200).json(data);
}

// Get Single Student
const getSingleStudents = async (req, res) => {
    let id = req.params.id;

    let singleData = await Student.findById(id);
    res.status(200).json(singleData);
    
}

// Create Students Post
const createStudent = async (req, res) => {
    
    let data = await Student.create({
        name    : req.body.name,
        age    : req.body.age,
        skill    : req.body.skill,
        location    : req.body.location
    });

    res.status(201).json({
        message : "Student data ceated successful"
    });

}

// Update Student Data
const updateStudents = async (req, res) => {
    let id = req.params.id;

    await Student.findByIdAndUpdate(id, req.body, {
        new : true
    });

    res.status(200).json({
        message : "Student Data updated"
    });
}

// Delete Students Data
const deleteStudents = async (req, res) => {
    
    let id = req.params.id;

    await Student.findByIdAndDelete(id);
    res.status(200).json({
        message : "Student Data Deleted Successful"
    });
    
}



// Export All Object
module.exports = {
    getAllStudents,
    getSingleStudents,
    createStudent,
    updateStudents,
    deleteStudents    
}