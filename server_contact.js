const express = require('express')
const app = express()
const path = require('path')
const Check = require('./mongo_contact')

// Middleware for parsing request bodies
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Serve static HTML files from the tempelates folder
app.use(express.static(path.join(__dirname, 'tempelates')))

// Serve contact page as a static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tempelates', 'contactUS.html'))
})

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
    const { name, phoneNumber, message } = req.body
    await Check.insertMany([{ name, phoneNumber, message }])
    res.send("Form submitted successfully")
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
