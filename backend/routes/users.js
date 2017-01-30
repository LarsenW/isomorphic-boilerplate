const User = require('../models/user');

module.exports = function (app) {
    app.get('/posts', function (req, res) {
        res.send('hello world');
    });
    app.post('/posts', function (req, res) {
        User.create({firstName: 'John', lastName: 'Smith'});
        res.send('hello world');
    });
    app.get('/posts/:id', function (req, res) {
        res.send('hello world');
    });
    app.put('/posts/:id', function (req, res) {
        res.send('hello world');
    });
    app.delete('/posts/:id', function (req, res) {
        res.send('hello world');
    });
};
