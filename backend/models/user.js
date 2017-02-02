"use strict";

const models = require('../models');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }

    }, {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Post);
            }
        }
    });

    return User;
};