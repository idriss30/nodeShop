//importing required modules
const express = require("express");
const path = require("path");
const shopRoutes = require('./routes/shop')




//initializing express
const app = express();

//setting views to ejs
app.set('view engine', 'ejs');
app.set('views', 'views')


//serving static files
app.use(express.static(path.join(__dirname, 'public')))

//index routes
app.use('/', shopRoutes)
module.exports = app;