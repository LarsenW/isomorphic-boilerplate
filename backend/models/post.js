const Sequelize = require("sequelize");
const sequelize = require('../utils/db');

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});

module.exports = Post;