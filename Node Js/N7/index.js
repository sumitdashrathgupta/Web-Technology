const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const Router =require("./Routes/Routes")
const App = express()

App.use(express.json())

App.use("/api",Router)

mongoose.connect(process.env.MONGO_URL).then(() => {
    App.listen(process.env.PORT || 3000, () => {
        console.log("DataBase Connect Sucessfully ")
    })
}).catch(() => {
    console.log("DataBase connect faile")
})