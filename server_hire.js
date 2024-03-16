const express = require('express')
const app = express()
const path = require('path')
const Check = require('./mongo')
const tempelatePath = path.join(__dirname,'./tempelates')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine',"hbs")
app.set("views", tempelatePath)
app.get('/',(req, res) => {
    res.render('hire')
})
// Route to handle form submission
app.post('/submit-form', async (req, res) => {
    const name = req.body.name
    const phoneNumber = req.body.phoneNumber
    const govid = req.body.govid
    await Check.insertMany([{name,phoneNumber,govid}])
    res.send("sent")
});

app.listen(5151,() => {
    console.log("port connected");
})