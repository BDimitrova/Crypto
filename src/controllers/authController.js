const router = require('express').Router();
const authServices = require('../services/authServices');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const { username, email, password, confirmPass } = req.body;
    
    authServices.register({
        username,
        email,
        password,
        confirmPass
    });
    
    res.redirect('/');
})

module.exports = router;