const Sequelize = require("sequelize");
const sequelize = require('../utils/db');

const Post = sequelize.define('user', {
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
Post.sync({force: true});
