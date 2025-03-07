const express = require("express")
const Router = express.Router()
const { InsertData, FatchData, DeleteData, UpdateData } = require("../Controller/Controller")

Router.post("/insert", InsertData)
Router.get("/fatch", FatchData)
Router.put("/update/:id", UpdateData)
Router.delete("/delete/:id", DeleteData)

module.exports = Router