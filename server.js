const express = require('express')
const app = express()
const path = require('path')
const Check = require('./mongo')

// Middleware for parsing request bodies
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Serve static HTML files from the tempelates folder
app.use(express.static(path.join(__dirname, 'tempelates')))

// Serve sign-up page as a static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tempelates', 'signUP.html'))
})

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
    const { name, phoneNumber, username, password } = req.body
    await Check.insertMany([{ name, phoneNumber, username, password }])
    res.send("Form submitted successfully")
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
})
