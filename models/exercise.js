const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const exerciseSchema = new Schema(
  {
    username: {
      type:String,
      required:true
    },
    discription: {
      type:String,
      required:true
    },
    duration: {
      type:Number,
      required:true
    },
    date: {
      type:Date,
      required:true
    },
  },
  {
    timestamps: true
  }
);

// Create model for todo
const Exercise = mongoose.model('Exercise',exerciseSchema);

module.exports = Exercise;