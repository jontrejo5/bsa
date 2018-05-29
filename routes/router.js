var express = require('express');
var router = express.Router();
var general = require('../security');

//router for the homepage
router.get('/', function(req, res, next) {
    res.render("home",{title: 'Boss Stage Arcade and Anime - Home'});
})


module.exports = router;