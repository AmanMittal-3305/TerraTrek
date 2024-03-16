const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://0.0.0.0:27017/contactUS", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    message : {
        type : String,
        required : true
    }
});

const contact = mongoose.model('contact', contactSchema);



module.exports = contact;
