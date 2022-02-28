const Sequelize = require("sequelize");
const config = require("./config/config.json");
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.driver,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.articles = require("./App/Models/Article")(sequelize, Sequelize);
module.exports = db;
