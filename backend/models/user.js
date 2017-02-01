"use strict";

const models = require('../models');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Post);
            }
        }
    });

    return User;
};