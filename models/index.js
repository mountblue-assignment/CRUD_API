const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

// Creating  an instance of sequelize ---
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.aquire,
    idle: dbConfig.pool.idle,
  },
});

// Validating  and connecting to the database

sequelize
  .authenticate()
  .then(() => {
    console.log('Successfully connected to the database!');
  })
  .catch((error) => console.log('Failed to connect the database:', error));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//now we will sequelize -------

db.todos = require('./todoModel.js')(sequelize, DataTypes);

//here force :false means it will create table if it doesnt exist or if it exists it wont override
db.sequelize.sync({ force: false }).then(() => {
  console.log('The table for the todos model was created!');
});

module.exports = db;
