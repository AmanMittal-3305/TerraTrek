const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://0.0.0.0:27017/signUP", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const signUPSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const signUP = mongoose.model('signUP', signUPSchema);



module.exports = signUP;
