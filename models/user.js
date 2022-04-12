const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const userSchema = new Schema(
    {
        username:{
            type : String,
            require : true,
            unique : true,
            trim: true,
            minlength: 3
        },
    }, 
    { 
        timestamps: true
    }
);

// Create model for todo
const User = mongoose.model('User',userSchema);

module.exports = User;