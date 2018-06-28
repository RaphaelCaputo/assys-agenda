const config = require('config');
const _ = require('lodash');
const {User, validate} = require('../../model/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('register');
});


router.post('/', async (req, res) => {

    // console.log(req.body);
    const { error } = validate(req.body);
    
    if (error) return res.status(400).send(error.details[0].message);
    
    let user = await User.findOne({ cpf: req.body.cpf });
    if (user) return res.status(400).send('User already registered.');

    user = new User(_.pick(req.body, ['name', 'lastName', 'cpf', 'role', 'birthDate', 'phone', 'cellPhone', 'email']));

    await user.save();

    console.log(user);
    res.redirect('/')
});

module.exports = router;