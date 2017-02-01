"use strict";

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');
const models = require('./models');

const users = require('./routes/users');
const posts = require('./routes/posts');


const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());

users(app);
posts(app);

models.sequelize.sync().then(() => {
    app.listen(config.development.port, function () {
        console.log('Todo app listening on port' + ' ' + config.development.port);
    });
});

