const express = require('express');
const router = express.Router();


// StudentController distructure
const { getAllStudents, getSingleStudents, createStudent, updateStudents, deleteStudents } = require('../controllers/studentController');


// Students Router
router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getSingleStudents).put(updateStudents).patch(updateStudents).delete(deleteStudents);





// Export Router
module.exports = router;