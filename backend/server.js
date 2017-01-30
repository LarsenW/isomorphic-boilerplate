const express = require('express');
const config = require('./config');
const users = require('./routes/users');

const app = express();

users(app);
app.listen(config.development.port, function () {
    console.log('Todo app listening on port' + ' ' + config.development.port);
});