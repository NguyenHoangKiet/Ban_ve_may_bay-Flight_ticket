const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const chuyenbaySchema = new Schema({
  MaSanBayDi: {
    type: String,
    required: true,
  },
  MaSanBayDen: {
    type: String,
    required: true,
  },
  NgayGio : {
    type : Date,
    required : true
  },
  ThoiGianBay : {
    type : Number,
    required : true
  },
  MaSanTrungGian: {
    type: String,
    required: true,
  },
  MaSoluongHangGhe :{
    type : String
  }
});

// Create model for todo
const chuyenbay = mongoose.model('chuyenbay',chuyenbaySchema);

module.exports = chuyenbay;