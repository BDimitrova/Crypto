const {AUTH_COOKIE_NAME} = require('../constants')

exports.auth = function(req, res, next) {
    let cookie = req.cookies[AUTH_COOKIE_NAME];
}