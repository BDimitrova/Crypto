const router = require('express').Router();
const authServices = require('../services/authServices');

const { AUTH_COOKIE_NAME } = require('../constants');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    try {
        let token = authServices.login({ email, password })
        //TODO: Set token in httpOnly cookie
        res.cookie(AUTH_COOKIE_NAME);
        res.redirect('/');
    } catch (err) {
        //TODO: Return proper notification message
        console.log(err);
        res.end();
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