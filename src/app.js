import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
// import { errorHandler, notFound } from './middleware/errorHandler.js';


const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(morgan('dev')); // Log HTTP requests
app.use(helmet()); // Add security headers


// Catch-all for unknown routes
// app.use(notFound);

// Error handling middleware
// app.use(errorHandler);

export default app;
