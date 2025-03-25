const dotenv = require('dotenv').config();

const env = {
  PORT: process.env.SERVER_PORT || '8080',
  NAME: process.env.APP_NAME,
}

module.exports = env
