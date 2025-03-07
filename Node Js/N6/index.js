const express = require("express")
const mongoose = require('mongoose')
const Create = require("./Model/Model")
require("dotenv").config()
const App = express()
App.use(express.json())



//Fatch Data

App.get("/fatch", async (req, res) => {
    try {
        let DataList = await Create.find()
        res.status(200).send({ status: 1, UserData: DataList })
    }
    catch {
        res.send("This is not find")
    }
})

//This is a inserData
App.post("/login", (req, res) => {
    let { name, emailID, phone, password } = req.body
    let InsertData = new Create({
        name,
        password,
        emailID,
        phone
    })
    InsertData.save().then(() => {
        res.send("The login sucessfuly")
    }).catch((err) => {
        res.send("The login Not sucessfuly" + err)
    })
})

//Delete

App.delete("/delete/:id", async (req, res) => {
    let DeleteData = req.params.id
    let Delete = await Create.deleteOne({ _id: DeleteData })
    res.send({ status: 1, DeleteOne: Delete })
})

//Update

App.put("/update/:id", async (req, res) => {
    let updateData = req.params.id
    let { name, emailID, phone, password } = req.body
    let objUpdate = {
        name,
        password,
        emailID,
        phone
    }
    let Update1 = await Create.updateOne({ _id: updateData }, objUpdate)
    res.send({ status: 1, Data: Update1 })
})

mongoose.connect(process.env.MONURL).then(() => {
    App.listen(process.env.PORT || 3000, () => {
        console.log(`Runing port no ${process.env.PORT}`)
    })
})
