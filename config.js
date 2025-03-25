const dotenv = require('dotenv').config();

const env = {
  PORT: process.env.SERVER_PORT || '4000',
  NAME: process.env.APP_NAME,
}

module.exports = env
