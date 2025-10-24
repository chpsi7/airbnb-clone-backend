const initData = require('./data');
const Listing = require('../models/listing');
const mongoose = require('mongoose');
const mongo_url = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(mongo_url);
}

const initDb = async() => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
}

initDb();