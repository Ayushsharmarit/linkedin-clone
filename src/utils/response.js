/**
 * Sends a success response.
 * @param {object} res - The Express response object.
 * @param {string} message - Success message.
 * @param {object} [data={}] - Optional response data.
 * @param {number} [code=200] - HTTP status code (default is 200).
 */
export const successResponse = (res, message, data = {}, code = 200) => {
    res.status(code).json({
      success: true,
      message,
      data,
    });
  };
  
  /**
   * Sends an error response.
   * @param {object} res - The Express response object.
   * @param {string} message - Error message.
   * @param {number} code - HTTP status code (default is 500).
   * @param {string|null} [details=null] - Optional error details.
   * @param {string} [type='API'] - Error type ('API' or 'Application').
   */
  export const errorResponse = (res, message, code = 500, details = null, type = 'API') => {
    res.status(code).json({
      success: false,
      message,
      error: {
        type,
        code,
        details,
      },
    });
  };
  