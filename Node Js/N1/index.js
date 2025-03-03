const http = require("http")


//? This is server 

// const server = http.createServer((req, res) => {
//     res.end("This is a first server")
// })


//! This is a routing server

const server = http.createServer((req, res) => {
    if (req.url == "/new") {
        const obj = [
            { id: 1, "name": "sumit" },
            { id: 2, "name": "amit" }
        ]
        res.end(JSON.stringify(obj))
        return
    }
    res.end("This is a first class")

})
server.listen("1000")