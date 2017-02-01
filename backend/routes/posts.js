const models = require('../models');

const basePath = '/users/:userId';

module.exports = function (app) {
    app.get(`${basePath}/posts`, function (req, res) {
        models.Post.findAll({UserId: req.params.userId}).then((posts) => {
            res.json(posts);
        });
    });
    app.post(`${basePath}/posts`, function (req, res) {
        models.Post.create(Object.assign(req.body, {UserId: req.params.id})).then((post) => {
            res.json(post);
        });
    });
    app.get(`${basePath}/posts/:id`, function (req, res) {
        models.Post.findById(req.params.id).then((post) => {
            res.json(user);
        });
    });
    app.put(`${basePath}/posts/:id`, function (req, res) {
        models.Post.update(req.body, {where: {id: req.params.id}, returning: false}).then(() => {
            return models.Post.findById(req.params.id)
        }).then((post) => {
            res.json(post);
        });
    });
    app.delete(`${basePath}/posts/:id`, function (req, res) {
        models.Post.destroy({where: {id: req.params.id}}).then((users) => {
            res.sendStatus(200);
        });
    });
};
