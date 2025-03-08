const express = require("express")
const { DataBaseconection } = require("./DBconnection")
const { ObjectId } = require("mongodb")
const App = express()

App.use(express.json())



//! This is a Display Data

App.get("/get", async (req, res) => {
    const DataBaseconnect = await DataBaseconection()
    const createcollection = DataBaseconnect.collection('BSC Department')

    const Datafind = await createcollection.find().toArray() // This is a display data 
    res.send(Datafind)
})

//! This is a inserdata 

App.post("/send", async (req, res) => {
    const DataBaseconnect = await DataBaseconection()
    const createcollection = DataBaseconnect.collection('BSC Department')
    let { username, password, email } = req.body
    let obj = {
        username, password, email
    }
    const usercondition = await createcollection.findOne({ username })  //This is alredy exit username
    const emailcondition = await createcollection.findOne({ email })    //This is alredy exit email

    if (emailcondition) {
        return res.send("This email alrady exect")
    }
    if (usercondition) {
        return res.send("This username alrady exect")
    }

    let insertData = await createcollection.insertOne(obj) //This is a inserdata

    let data = {
        status: 1,
        "mas": "this a right",
        insertData
    }
    res.send(data)
})



//! This is a Update
App.put("/update/:id", async (req, res) => {
    let { id } = req.params
    const DataBaseconnect = await DataBaseconection()
    const createcollection = DataBaseconnect.collection('BSC Department')
    let { username, password, email } = req.body

    let obj = {
        username, password, email
    }

    const Update = await createcollection.updateOne({ _id: new ObjectId(id) }, { $set: obj })

    res.send(Update)
    console.log(Update)
})


//! This is a delete

App.delete("/delete/:id", async (req, res) => {
    let { id } = req.params
    const DataBaseconnect = await DataBaseconection()
    const createcollection = DataBaseconnect.collection('BSC Department')

    const Delectdata = await createcollection.deleteOne({ _id: new ObjectId(id) })  // This is a delete part

    res.send(Delectdata)
})

App.listen("4000")