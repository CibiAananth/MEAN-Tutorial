import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.NODE_PORT,
  /**
   * That long string from mlab
   */
  databaseURL: process.env.NODE_MONGODB_URI,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.NODE_LOG_LEVEL || 'silly',
  },

  /**
   * Agenda.js stuff
   */
  agenda: {
    dbCollection: process.env.NODE_AGENDA_DB_COLLECTION,
    pooltime: process.env.NODE_AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.NODE_AGENDA_CONCURRENCY, 10),
  },

  /**
   * Agendash config
   */
  agendash: {
    user: 'agendash',
    password: 'admin',
  },
  /**
   * Mailgun email credentials
   */
  emails: {
    apiKey: process.env.NODE_EMAIL_API_KEY,
    domain: process.env.NODE_EMAIL_DOMAIN,
  },
  /**
   * Your secret sauce
   */
  jwtSecret: process.env.NODE_JWT_SECRET,
  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
