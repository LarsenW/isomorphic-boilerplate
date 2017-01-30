const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(config.development.db.name, config.development.db.user, config.development.db.password, {
    host: config.development.db.uri,
    dialect: config.development.db.dialect
});

module.exports = sequelize;