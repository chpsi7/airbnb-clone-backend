const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true},
    description: {
        type: String},
    image: {
        type: String,
        set: (v) => v === '' ? "https://unsplash.com/photos/two-chairs-sitting-in-front-of-a-swimming-pool-k_My4rXk4Lc" : v}, 
    price: Number, 
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
