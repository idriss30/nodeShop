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

app.get('/aboutus', (req, res, next)=>{
    res.sendfile('./views/about.html')
})

app.get('/signup', (req, res, next)=>{
  res.sendfile('./views/signup.html')
})

app.get("/login", (req, res, next)=>{
    res.sendfile("./views/login.html")
})
module.exports = app;