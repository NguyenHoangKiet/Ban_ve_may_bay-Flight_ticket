const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const sanbaytrunggianSchema = new Schema({
  MaChuyenBay: {
    type: String,
  },
  MaSanBay: {
    type: String,
  },
  ThoiGianDung: {
    type: Number,
    required: true,
  },
  GhiChu: {
    type: String,
    required: true,
  },
});

// Create model for todo
const sanbaytrunggian = mongoose.model('sanbaytrunggian',sanbaytrunggianSchema);

module.exports = sanbaytrunggian;