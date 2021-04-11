require('dotenv').config();

const {DB_NAME, DB_PORT, DB_HOST, JWT} = process.env;

module.exports = {
    DB_NAME,
    DB_PORT,
    DB_HOST,
    JWT,
}