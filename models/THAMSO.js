const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const THAMSOSchema = new Schema({
  TenThamSo: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  GiaTri: {
    type: Number,
    required: [true, 'The todo text field is required'],
  },
});

// Create model for todo
const Thamso = mongoose.model('THAMSO',THAMSOSchema);

module.exports = Thamso;