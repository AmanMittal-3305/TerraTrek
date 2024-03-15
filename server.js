const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/website', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for the data
const formDataSchema = new mongoose.Schema({
  fullName: String,
  message: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    const { fullName, message } = req.body;

    // Create a new form data document
    const newFormData = new FormData({
      fullName,
      message
    });

    // Save the form data to the database
    await newFormData.save();

    res.status(200).send('Form data saved successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
