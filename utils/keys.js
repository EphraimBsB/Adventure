require('dotenv').config();

const {
  DB_NAME,
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASS,
  JWT,
} = process.env;

module.exports = {
  DB_NAME,
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASS,
  JWT,
};
