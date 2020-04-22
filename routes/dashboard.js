var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('dashboard')
})
router.get('/dashboard', function(req, res) {
    res.render('dashboard')
})



module.exports = router;