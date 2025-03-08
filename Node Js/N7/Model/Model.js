const mongoose = require("mongoose")

const Create = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    massage: {
        type: String
    }
})

const CreateData = mongoose.model("Student information", Create)
module.exports = CreateData