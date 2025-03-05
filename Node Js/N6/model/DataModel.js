const mongoose = require("mongoose");

const FormInput = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {  
        type: String,
        required: true,
        unique: true
    }
});

const FormData = mongoose.model("userData", FormInput);
module.exports = FormData;
