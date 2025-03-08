const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url);

async function DataBaseconection() {
    await client.connect()
    const DataBase = client.db("student")
    return DataBase
}

module.exports = { DataBaseconection }