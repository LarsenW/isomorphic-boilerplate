const models = require('../models');

const basePath = '/users/:userId';

module.exports = function (app) {
    app.get(`${basePath}/posts`, function (req, res) {
        res.send('hello world');
    });
    app.post(`${basePath}/posts`, function (req, res) {
        models.User.create({username: 'John'});
        res.send('hello world');
    });
    app.get(`${basePath}/posts/:id`, function (req, res) {
        res.send('hello world');
    });
    app.put(`${basePath}/posts/:id`, function (req, res) {
        res.send('hello world');
    });
    app.delete(`${basePath}/posts/:id`, function (req, res) {
        res.send('hello world');
    });
};
