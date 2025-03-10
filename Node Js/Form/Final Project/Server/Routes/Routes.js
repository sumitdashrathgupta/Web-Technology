const express = require("express")
const { InsertData, FindData } = require("../Controller/Controller")
const Router = express.Router()


Router.post("/insert", InsertData)
Router.get("/find", FindData)


module.exports = Router