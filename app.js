const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log("MongoDB connection open!");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

    

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/makecampground', async (req,res)=>{
    const camp = new Campground({title:'My Backyard',description:'Cheap camping!'});
    await camp.save();
    res.send(camp);
})


app.listen(5000,()=>{
    console.log('Serving on port 5000')
})