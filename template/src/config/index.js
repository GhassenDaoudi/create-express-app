require('dotenv').config();

const config = {
  meta: {
    service: {
      name: process.env.SERVICE_NAME,
    },
  },
  api: {
    port: parseInt(process.env.API_PORT),
  },
};

module.exports = {config};
