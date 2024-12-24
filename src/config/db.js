// src/config/db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.LOCAL_MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default { connect };
