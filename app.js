const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_url = 'mongodb://127.0.0.1:27017/wanderlust';
const Listing = require('./models/listing.js');
const path = require('path');

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

// app.get("/testListing", async (req, res) => {
//     const sampleListing = new Listing({
//         title: "a47",
//         description: "A very peaceful stay",
//         price: 1200,
//         location: "Panscheel Vihar",
//         country: "India"
//     });

//     await sampleListing.save();
//     res.send("test successful! sample listing is added in the db")
// })

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true})); //this line tells the server to parse the link sent into an object

//index route
app.get("/listing", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", {allListings});
})

//show route
app.get("/listings/:id", async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", {listing});
})



