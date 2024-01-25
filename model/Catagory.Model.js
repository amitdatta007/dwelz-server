const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Required"],
        unique: true,
    },
    icon: {
        
    }
})