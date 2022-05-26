const jwt = require('../utils/jwt');

const User = require('../models/User');
const { TOKEN_SECRET } = require('../constants');

exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    let user = User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    };

    let isValid = await User.validatePassword(password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    let payload = {
        _id: user._id, 
        name: user.name,
        email: user.email
    }

    let token = jwt.sign(payload, TOKEN_SECRET);
}