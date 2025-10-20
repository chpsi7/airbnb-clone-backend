const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_url = 'mongodb://127.0.0.1:27017/wanderlust';

app.listen(8080, () => {
    console.log("server is listening");
})

app.get("/", (req, res) => {
    res.send("Hi Chops!");
})

main().then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(mongo_url);
}

