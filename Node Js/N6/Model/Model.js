const mongoose = require("mongoose")
const CreateModel = mongoose.Schema({
    name: {
        type: String,
        required: true
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
        type: String,
        required: true
    }
})

const Create = mongoose.model("User", CreateModel)
module.exports = Create