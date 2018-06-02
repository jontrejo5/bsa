var express = require('express');
var router = express.Router();
var general = require('../security');

//router for the homepage
router.get('/', function(req, res, next) {
    res.render("home",{title: 'Boss Stage Arcade and Anime - Home'});
})

router.get('/games', function(req, res, next) {
    res.render("games",{title: 'Boss Stage Arcade and Anime - Games'});
})

router.get('/catalog', function(req, res, next) {
    res.render("catalog",{title: 'Boss Stage Arcade and Anime - Catalog'});
})

router.get('/contact', function(req, res, next) {
    res.render("contact",{title: 'Boss Stage Arcade and Anime - Contact'});
})

router.get('/login', function(req, res, next) {
    res.render("login",{title: 'Boss Stage Arcade and Anime - Login'});
})


module.exports = router;