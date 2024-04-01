const dotenv = require('dotenv').config();

module.exports = {
  PORT: process.env.SERVER_PORT || '3000',
  NAME: process.env.APP_NAME,
}
