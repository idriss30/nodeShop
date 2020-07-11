//importing required modules
const express = require("express");
const path = require("path");




//initializing express
const app = express();



//serving static files
app.use(express.static(path.join(__dirname, 'public')))

//index routes
app.get('/', (req, res, next)=>{
    res.sendfile('./views/index.html')
})

app.get('/shop', (req, res, next)=>{
    res.sendfile('./views/shop.html')
})



module.exports = app;