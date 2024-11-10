import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import db from './src/config/db.js';

dotenv.config();
const app = express();

// Middleware configuration
app.use(express.json());



// Connect to MongoDB
db.connect();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
