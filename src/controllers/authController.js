const router = require('express').Router();
const authServices = require('../services/authServices');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    try {
        authServices.login({ email, password })

    } catch (err) {

    }

})

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const { username, email, password, confirmPass } = req.body;

    if (password !== confirmPass) {
        res.locals.error = 'Passwords do not match'
        return res.render('auth/register')
    }
    try {
        authServices.register({
            username,
            email,
            password,
        });

        res.redirect('/');
    } catch (err) {
        //TODO retrun error
    }
    
})

module.exports = router;