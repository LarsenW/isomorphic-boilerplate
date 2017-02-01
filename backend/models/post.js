"use strict";

const models = require('../models');

module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                Post.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Post;
};