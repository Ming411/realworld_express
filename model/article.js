const mongoose = require('mongoose');
const {Schema} = mongoose;
const baseModel = require('./base-model');
const articleSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  body: {type: String, required: true},
  tagList: {type: [String], default: null},
  favoritesCount: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ...baseModel
});
module.exports = articleSchema;
