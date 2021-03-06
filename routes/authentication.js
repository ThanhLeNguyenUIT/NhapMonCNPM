const express = require('express');
const router = express.Router();
const User = require('../model/user');
const { loginValidation } = require('../resource/js/validation');

let checkEmail = '';
router.get('/', function(req, res) {
    res.redirect('/authentication');
})
router.get('/authentication', function(req, res) {
    res.render('authentication', { messages: req.flash('message'), errors: checkEmail });
})
let NameUser = '1';
router.post('/dashboard', async(req, res) => {

    const { error } = loginValidation(req.body);
    if (error) {
        req.flash('message', error.details[0].message)
        return res.redirect('/authentication')
    }
    //check if email is exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        req.flash('message', "Email không tồn tại")
        return res.redirect('/')
    }

    if (req.body.password != user.password) {
        req.flash('message', "Sai mật khẩu")
        return res.redirect('/')
    }

    messages = '';
    NameUser = user.name;
    module.exports.User = user;
    res.render('dashboard', { username: user.name });
})


module.exports = router;