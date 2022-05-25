const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            throw new Error('Cannot hash password');
        }

        this.password = hash;
        next();
    })
})

const User = mongoose.model('User', userSchema);

module.exports = User;