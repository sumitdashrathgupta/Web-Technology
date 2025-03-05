const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const FormData = require("./model/DataModel")

const App = express()
App.use(express.json())

App.post("/insert-one", async (req, res) => {
  try {
    let { susername, spassword, semail } = req.body;

    let DD = new FormData({
      username: susername,
      password: spassword,
      email: semail
    });

    await DD.save();
    res.send({ status: 1, msg: "Data Saved" });

  } catch (err) {
    if (err.code === 11000) {
      res.send({ status: 0, msg: "Duplicate value detected" });
    } else {
      res.send({ status: 0, msg: "Data Not Saved", error: err.message });
    }
  }
});


mongoose.connect(process.env.DBURL).then(() => {
  console.log("Connect")
  App.listen(process.env.PORT, () => {
    console.log("Thsi is a port" + process.env.PORT)
  })
})