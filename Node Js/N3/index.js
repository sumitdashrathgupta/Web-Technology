const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.post("/news", (req, res) => {
    res.send("This is a news")
})

app.listen("4000")