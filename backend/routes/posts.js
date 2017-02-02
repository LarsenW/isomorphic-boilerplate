const models = require('../models');

const basePath = '/users/:userId';

module.exports = function (app) {
    app.get(`${basePath}/posts`, function (req, res) {
        models.Post.findAll({UserId: req.params.userId}).then((posts) => {
            res.json(posts);
        }).catch(() => {
            res.sendStatus(400);
        });
    });
    app.post(`${basePath}/posts`, function (req, res) {
        models.Post.create(Object.assign(req.body, {UserId: req.params.userId})).then((post) => {
            res.json(post);
        }).catch(() => {
            res.sendStatus(400);
        });
    });
    app.get(`${basePath}/posts/:id`, function (req, res) {
        models.Post.findById(req.params.id).then((post) => {
            res.json(user);
        }).catch(() => {
            res.sendStatus(400);
        });
    });
    app.put(`${basePath}/posts/:id`, function (req, res) {
        models.Post.update(req.body, {where: {id: req.params.id}, returning: false}).then(() => {
            return models.Post.findById(req.params.id)
        }).then((post) => {
            res.json(post);
        }).catch(() => {
            res.sendStatus(400);
        });
    });
    app.delete(`${basePath}/posts/:id`, function (req, res) {
        models.Post.destroy({where: {id: req.params.id}}).then((users) => {
            res.sendStatus(200);
        }).catch(() => {
            res.sendStatus(400);
        });
    });
};
