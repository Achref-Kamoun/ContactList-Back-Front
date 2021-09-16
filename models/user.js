const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    dateCreation: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model("Users", userSchema)