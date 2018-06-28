const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    cpf: {
      type: String,
      required: true,
      minlength: 14,
      maxlength: 14,
      unique: true
    },
    role: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50   
    },
    birthDate: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10
    },
    email: {
      type: Array,
      required: true,
      minlength: 5,
      maxlength: 255
    },
    phone: {
      type: Array,
      minlength: 9,
      maxlength: 9,
    },
    cellPhone: {
      type: Array,
      required: true,
      minlength: 9,
      maxlength: 10
    }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
  return token;
} 

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    cpf: Joi.string().min(14).max(14).required(),
    role: Joi.string().min(3).max(50).required(),
    birthDate: Joi.string().min(10).max(10).required(),
    email: Joi.string().min(5).max(255).required().email(), // Valid email email()
    phone: Joi.string().min(9).max(9).required(),
    cellPhone: Joi.string().min(9).max(10).required()
  };

  return Joi.validate(user, schema);
}

function validateUpdate(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    cpf: Joi.string().min(14).max(14).required(),
    role: Joi.string().min(3).max(50).required(),
    birthDate: Joi.string().min(10).max(10).required(),
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;
exports.validateUpdate = validateUpdate;