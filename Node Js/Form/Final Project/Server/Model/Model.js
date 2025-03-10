const mongoose = require('mongoose');

const CreateSchema = new mongoose.Schema({
    FName: {
        type: String,
        required: true
    },
    LName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String
    }
});

const CreateData = mongoose.model("Student", CreateSchema);
module.exports = CreateData;
