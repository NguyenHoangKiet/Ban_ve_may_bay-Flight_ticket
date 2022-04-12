const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const TAIKHOANSchema = new Schema({
  TenTaiKhoan: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  MatKhau: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});

// Create model for todo
const TaiKhoan = mongoose.model('TAIKHOAN',TAIKHOANSchema);

module.exports = TaiKhoan;