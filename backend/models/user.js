const Sequelize = require("sequelize");
const sequelize = require('../utils/db');

const Post =require("./post");

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
User.hasMany(Post);

User.sync({force: true});
Post.sync({force: true});


module.exports = User;
