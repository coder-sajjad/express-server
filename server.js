const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const connectMongoDb = require('./config/db');

// const {authcheck} = require('./middleware/authMiddleware');

// Connect MongoDB DataBase
connectMongoDb();

// Environment variables init
const PORT = process.env.SERVER_PORT;

// Request Body init
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// Student Route
app.use('/api/students', require('./routes/students'));

// Admin Route
app.use('/api/admins', require('./routes/admin'));

// Add express server listener with PORT
app.listen(PORT, () => console.log(`server is running on port ${ PORT }`.bgWhite .green));