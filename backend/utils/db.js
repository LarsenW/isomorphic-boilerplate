const Sequelize = require("sequelize");

const sequelize = new Sequelize('sec_demo', 'root', '11111111', {
    host: 'sec-demo.clwa0fzcyamd.eu-central-1.rds.amazonaws.com',
    dialect: 'mysql'
});

module.exports = sequelize;