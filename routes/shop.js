const express = require('express');
const shopctrl = require('../controllers/shopctrl')


//create the router to handle routes
const router = express.Router();


router.get('/', shopctrl.getIndex)

router.get('/shop', shopctrl.getShop)

router.get('/aboutus', shopctrl.getAboutUs)


router.get('/signup', shopctrl.getSignUp)


router.get('/login', shopctrl.getLogin )
module.exports = router;