const username = "sumit"
const password = "12345"

const check = (req, res, next) => {
    if (req.body.username == "" && req.body.username == "") {
        return res.send({ status: "Write a username and password" })
    }
    if (req.body.username !== username && req.body.password == password) {
        return res.send({ status: "username invaild" })
    }
    if (req.body.username == username && req.body.password !== password) {
        return res.send({ status: "Password invaild" })
    }
    if (req.body.username !== username && req.body.password !== password) {
        return res.send({ status: "Invaild username and password" })
    }
    next()
}

module.exports = check