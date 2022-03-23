const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    username: { type: String },
    action : { type: String }
  },
  { timestamps: true }
);

const model = mongoose.model('userSign', schema);
module.exports = model;
