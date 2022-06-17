const express = require('express');
const { getAllAdmin, getSingleAdmin, deleteAdmin, updateAdmin, createAdmin, adminProfile, adminHome } = require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');
const { authcheck } = require('../middleware/authMiddleware');
const router = express.Router();



// Admin Route
router.post('/login', adminLogin);
router.get('/profile', authcheck,  adminProfile);
router.get('/home', authcheck, adminHome);


// Create Admin Route
router.get('/', getAllAdmin);
router.get('/:id', getSingleAdmin);
router.delete('/:id', deleteAdmin);
router.put('/:id', updateAdmin);
router.patch('/:id', updateAdmin);
router.post('/', createAdmin);



// Export Admin Router
module.exports = router;