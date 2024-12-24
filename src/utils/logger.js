import winston from 'winston';

/**
 * Logger configuration using Winston.
 */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      const metaInfo = JSON.stringify(meta);
      return `[${timestamp}] ${level.toUpperCase()}: ${message} ${metaInfo !== '{}' ? metaInfo : ''}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.colorize({ all: true }),
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
});

export default logger;
