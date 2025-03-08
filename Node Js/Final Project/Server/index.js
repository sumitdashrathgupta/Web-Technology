const express = require("express")
const mongoose = require('mongoose')
const Router = require("./Routes/Routes")
const core = require("cors")
require("dotenv").config()

const App = express()
App.use(express.json())
App.use(core())
App.use(Router)

mongoose.connect(process.env.MONGO_URL).then(() => {
    App.listen(process.env.PORT || 3000, () => {
        console.log("Database connect sucessfully")
    })
}).catch(() => {
    console.log("Database connect falid")
})

