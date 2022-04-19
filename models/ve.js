const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const veSchema = new Schema({
  MaChuyenBay: {
    type: String,
    // required: true,
  },
  TenHangKhach: {
    type: String,
    required: true,
  },
  CMND: {
    type: Number,
    required: true,
  },
  SoDienThoai: {
    type: String,
    required: true,
  },
  MaHangGhe: {
    type: String,
    required: true,
  },
  NgayTao:{
     type : Date,
     require : true,
  },
  ThanhToan:{
    type : Boolean,
    require : true,
  },
  GiaVe:{
    type : Number,
    require : true,
  }
});

// Create model for todo
const ve = mongoose.model('ve',veSchema);

module.exports = ve;