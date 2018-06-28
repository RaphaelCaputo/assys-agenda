const express = require('express');
const home = require('../controller/routes/home');
const contact = require('../controller/routes/contact');
const register = require('../controller/routes/register');

module.exports = function(app) {
    app.use(express.json());
    app.use('/', home);
    app.use('/contact', contact);
    app.use('/register', register);

    
}