const mongoose = require('mongoose');
const {Schema} = mongoose;
const baseModel = require('./base-model');
const articleSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  bio: {type: String, default: null},
  image: {type: String, default: null},
  ...baseModel
});
module.exports = articleSchema;
