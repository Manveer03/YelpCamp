const mongoose = require('mongoose');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log("MongoDB connection open!");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

const seedDB = async () =>{
    await Campground.deleteMany({});
    const c = new Campground({title:'purple field'});
    await c.save();
}

seedDB();