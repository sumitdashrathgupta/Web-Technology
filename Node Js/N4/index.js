const express = require("express")
require("dotenv").config()
const data = require("./Middleware")
const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("This is a home page")
})

app.post("/login", data, (req, res) => {
    res.status(200).send(req.body)
})


app.listen(process.env.PORT)