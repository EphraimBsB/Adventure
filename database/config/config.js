require('dotenv').config();

const {
  DB_NAME,
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASS,
} = process.env;

const config = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql',
  },
};

module.exports = { config };
