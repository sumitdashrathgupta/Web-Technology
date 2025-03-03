const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello express")
})
app.get("/new", (req, res) => {
    res.send("news")
})
app.get("/about", (req, res) => {
    res.send("about")
})
app.get("/data", (req, res) => {
    res.send([{ id: 1 }, { id: 2 }])
})

app.listen("2000")