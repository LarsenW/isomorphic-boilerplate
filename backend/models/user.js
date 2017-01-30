const Sequelize = require("sequelize");
const sequelize = require('../utils/db');

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
User.sync({force: true});

module.exports = User;
