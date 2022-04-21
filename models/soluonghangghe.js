const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const soluonghanggheSchema = new Schema({
  MaChuyenBay: {
    type: String,
  },
  MaHangGhe: {
    type: String,
    required: true,
  },
  SoLuong : {
    type : Number,
    required : true
  },
});

// Create model for todo
const soluonghangghe = mongoose.model('soluonghangghe',soluonghanggheSchema);

module.exports = soluonghangghe;