const CreateData = require("../Model/Model")


//? InserData

const InsertData = async (req, res) => {
    let { FName, LName, Password, Email, Phone, Image } = req.body
    const Insert = new CreateData({
        FName, LName, Password, Email, Phone, Image
    })
    Insert.save().then(() => {
        res.send("The login sucessfuly")
    }).catch((err) => {
        res.send("The login Not sucessfuly " + err)
    })
}

//FindData

const FindData = async (req, res) => {
    const Find = await CreateData.find()
    res.send(Find
    )
}
module.exports = { InsertData, FindData }