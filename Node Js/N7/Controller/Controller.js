const CreateData = require("../Model/Model")


//!Insert Data

const InsertData = async (req, res) => {
    const { username, password, emailID, phone, massage } = req.body
    const Insert = new CreateData({
        username,
        password,
        emailID,
        phone,
        massage
    })
    Insert.save().then(() => {
        res.send("The login sucessfuly")
    }).catch((err) => {
        res.send("The login Not sucessfuly" + err)
    })
}

//!Fatch Data

const FatchData = async (req, res) => {
    const FullData = await CreateData.find()
    res.send({ status: 1, Data: FullData })
}

//! Update data

const UpdateData = async (req, res) => {
    let Updata = req.params.id
    const { username, password, emailID, phone, massage } = req.body
    const ObjInsert = {
        username,
        password,
        emailID,
        phone,
        massage
    }
    const DataUpdata = await CreateData.updateOne({ _id: Updata }, ObjInsert)
    res.send({ status: 1, Final: DataUpdata })
}

//! Delete Data

const DeleteData = async (req, res) => {
    let DataDelete = req.params.id
    let Delete = await CreateData.deleteOne({ _id: DataDelete })
    res.send({ status: 1, Datadelete: Delete })
}

module.exports = { InsertData, FatchData, UpdateData, DeleteData }