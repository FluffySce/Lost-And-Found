const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['lost', 'found'], required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  image: { type: String }, // Make sure this field is added to store the image path
});

module.exports = mongoose.model('Item', itemSchema);
