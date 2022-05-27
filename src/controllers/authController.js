const router = require('express').Router();
const authServices = require('../services/authServices');

const { AUTH_COOKIE_NAME } = require('../constants');

router.get('/login', (req, res) => {
    res.render('auth/login', {title: 'Login Page'});
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let token = await authServices.login({ email, password })

        res.cookie(AUTH_COOKIE_NAME, token);

        res.redirect('/');
    } catch (err) {
        //TODO: Return proper notification message
        console.log(err);
        res.end();
    }

})

router.get('/register', (req, res) => {
    res.render('auth/register', {title: 'Register Page'});
});

router.post('/register', async (req, res) => {
    const { username, email, password, confirmPass } = req.body;

    if (password !== confirmPass) {
        res.locals.error = 'Passwords do not match'
        return res.render('auth/register')
    }
    try {
        await authServices.register({
            username,
            email,
            password,
        });

        let token = await authServices.login({
            email, 
            password
        });
        res.cookie(AUTH_COOKIE_NAME, token);

        res.redirect('/');
    } catch (err) {
        //TODO retrun error
    }

})

module.exports = router;