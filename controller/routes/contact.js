const config = require('config');
const _ = require('lodash');
const {User, validate, validateUpdate} = require('../../model/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    
    res.render('contact', { user: user });
});

router.get('/edit/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    
    res.render('edit_contact', { user: user });
});

router.post('/edit/:id', async (req, res) => {
    const { error } = validateUpdate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const user = await User.findByIdAndUpdate(req.params.id, { 
        name: req.body.name,
        lastName: req.body.lastName,
        cpf: req.body.cpf,
        role: req.body.role,
        birthDate: req.body.birthDate,
    },
    {
      new: true
    });
  
    if (!user) return res.status(404).send('The contact with the given ID was not found.');
    
    res.render('contact', { user: user });
  });

  router.post('/delete/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
  
    if (!user) return res.status(404).send('The user with the given ID was not found.');
  
    res.redirect('/');
  });

  router.post('/delete/phone/:id/:phone', async (req, res) => {
    const user = await User.findById(req.params.id);

    const phoneIndex = req.params.phone;

    user.phone.splice(phoneIndex, 1);

    await user.save();

    // console.log(phoneIndex);

    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    res.render('contact', { user: user });
  });
  
  router.post('/delete/cellPhone/:id/:cellPhone', async (req, res) => {
    const user = await User.findById(req.params.id);

    const cellPhoneIndex = req.params.cellPhone;

    user.cellPhone.splice(cellPhoneIndex, 1);

    await user.save();

    // console.log(cellPhoneIndex);

    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    res.render('contact', { user: user });
  });

  router.post('/delete/email/:id/:email', async (req, res) => {
    const user = await User.findById(req.params.id);

    const emailIndex = req.params.email;

    user.email.splice(emailIndex, 1);

    await user.save();

    // console.log(emailIndex);

    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    res.render('contact', { user: user });
  });

  router.post('/add/phone/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    const newPhone = String(req.body['phone']);

    user.phone.push(newPhone);

    await user.save();

    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    res.render('contact', { user: user });
  });

  router.post('/add/cellPhone/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    const newCellPhone = String(req.body['cellPhone']);

    user.cellPhone.push(newCellPhone);

    await user.save();

    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    res.render('contact', { user: user });
  });

  router.post('/add/email/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    const newEmail = String(req.body['email']);

    user.email.push(newEmail);

    await user.save();

    if (!user) return res.status(404).send('The user with the given ID was not found.');
    
    res.render('contact', { user: user });
  });



module.exports = router;