require('dotenv').config();

module.exports = {
  HOST:process.env.db_HOST,
  USER:process.env.db_USER,
  PASSWORD:process.env.db_PASSWORD,
  DB:process.env.DB,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    aquire: 3000,
    idle: 10000,
  },
};
