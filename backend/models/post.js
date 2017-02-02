"use strict";

const models = require('../models');

module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3,30]
            }
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3,120]
            }
        }
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