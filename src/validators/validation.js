import { validationResult } from 'express-validator';
import { errorResponse } from './response.js';
import logger from './logger.js';

/**
 * Middleware to validate incoming requests.
 * @param {Array} validations - Express Validator validations.
 */
export const validateRequest = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorDetails = errors.array().map((error) => `${error.param}: ${error.msg}`).join(', ');

      logger.error(`Validation Error: ${errorDetails}`, {
        path: req.originalUrl,
        method: req.method,
      });

      return errorResponse(
        res,
        'Validation failed',
        400,
        errorDetails,
        'Validation'
      );
    }

    next();
  };
};
