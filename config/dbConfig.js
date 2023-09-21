module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'love123',
  DB: 'node_sequelize_api_db',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    aquire: 3000,
    idle: 10000,
  },
};
