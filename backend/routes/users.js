"use strict";
const models = require('../models');

module.exports = function (app) {
    app.get(`/users`, function (req, res) {
        models.User.findAll({}).then((users) => {
            res.json(users);
        });
    });
    app.post(`/users`, function (req, res) {
        models.User.create(req.body).then((user) => {
            res.json(user);
        });
    });
    app.get(`/users/:id`, function (req, res) {
        models.User.findById(req.params.id).then((user) => {
            res.json(user);
        });
    });
    app.put(`/users/:id`, function (req, res) {
        models.User.update(req.body, {where: {id: req.params.id}, returning: false}).then(() => {
            return models.User.findById(req.params.id)
        }).then((user) => {
            res.json(user);
        });
    });
    app.delete(`/users/:id`, function (req, res) {
        models.User.destroy({where: {id: req.params.id}}).then((users) => {
            res.sendStatus(200);
        });
    });
};
