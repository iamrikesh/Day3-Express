const mongoose = require('mongoose');

// user schmea
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

// user model
module.exports = mongoose.model('UserSch', userSchema);
