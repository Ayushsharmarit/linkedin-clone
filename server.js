import dotenv from 'dotenv';
import app from './src/app.js';
import { connectToDatabase } from './src/config/db.js';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to the database
connectToDatabase()
  .then(() => {
    console.log('✅ Database connected successfully');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to the database:', err.message);
    process.exit(1); // Exit the process with failure code
  });
