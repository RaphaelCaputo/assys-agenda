const config = require('config');
const _ = require('lodash');
const {User, validate} = require('../../model/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const users = await User.find().sort('name');

    res.render('home', { users: users });
});


module.exports = router;

// Busaca por nome (User.find()....)
// Icone de lixeira no lugar do x
// Icone de lupa no final da tabela