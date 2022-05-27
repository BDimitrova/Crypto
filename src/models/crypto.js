const mongoose = require('mongoose');

let cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['Crypto Wallet', 'Credit Card', 'Debit Card', 'PayPal']
    }
});

let Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;