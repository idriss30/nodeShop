exports.getIndex = (req, res, next)=>{
    res.render('index', {title:'Home'})
}

exports.getShop = (req, res, next)=>{
res.render('shop', {title:"shop"})
}

exports.getAboutUs = (req, res, next)=>{
    res.render('about', {title:"About Us"})
}


exports.getSignUp = (req, res, next)=>{
    res.render('signup', {title:'Sign Up'})
}


exports.getLogin = (req, res, next)=>{
    res.render('login', {title:"login "})
}