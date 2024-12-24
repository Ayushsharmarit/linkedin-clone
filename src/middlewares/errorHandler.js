import { errorResponse } from '../utils/response.js';
import logger from '../utils/logger.js';

/**
 * Handles 404 errors for unknown routes.
 */
export const notFound = (req, res, next) => {
  errorResponse(
    res,
    `Route not found - ${req.originalUrl}`,
    404,
    'This endpoint does not exist.',
    'API'
  );
};

/**
 * Global error handling middleware.
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || 'An unexpected error occurred.';
  const details = process.env.NODE_ENV === 'production' ? null : err.stack;

  const errorType = err.isAppError ? 'Application' : 'API';

  // Log the error for debugging or tracking
  logger.error(`${errorType} Error: ${message}`, {
    statusCode,
    details,
    path: req.originalUrl,
    method: req.method,
  });

  errorResponse(res, message, statusCode, details, errorType);
};
