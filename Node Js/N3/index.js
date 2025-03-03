const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.post("/news", (req, res) => {
    res.send("This is a news")
})


//!body in json

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     res.status(200).send(req.body)
//     // res.send("This is a login", req.body)
// })

//! This is a query

// app.post("/login", (req, res) => {
//     console.log(req.query);
//     res.status(200).send(req.query)
//     // res.send("This is a login", req.body)
// })

//! This is a params
app.post("/login/:id", (req, res) => {
    console.log(req.params.id);
    res.status(200).send(req.params)
    // res.send("This is a login", req.body)
})


app.listen("4000")