const User = require('../models/User');

exports.register = (userData) => User.create(userData);

exports.login = (email, password) => {
    let email = User.findOne({ email })
}