const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_url = 'mongodb://127.0.0.1:27017/wanderlust';
const Listing = require('./models/listing.js');

app.listen(8080, () => {
    console.log("server is listening");
})

app.get("/", (req, res) => {
    res.send("Hi Chops!");
})

app.get("/testListing", async (req, res) => {
    const sampleListing = new Listing({
        title: "a47",
        description: "A very peaceful stay",
        price: 1200,
        location: "Panscheel Vihar",
        country: "India"
    });

    await sampleListing.save();
    res.send("test successful! sample listing is added in the db")
})

main().then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(mongo_url);
}

