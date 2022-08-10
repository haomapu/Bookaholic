const mongoose = require("mongoose");
const Book = require("./book");

const accountSchema = new mongoose.Schema({

    firstName: {
        type: String,
        maxLength: 30,
        required: true
    },

    lastName: {
        type: String,
        maxLength: 30,
        required: true
    },

    username: {
        type: String,
        maxLength: 30,
        required: true
    },

    password: {
        type: String,
        maxLength: 30,
        minLength: 6,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    admin: {
        type: String,
        default: "0"
    },

    urlAvatar: {
        type: String,
    },

    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Book,
            default: null
        },
    ]
});

let Account = mongoose.model("Account", accountSchema);
module.exports = Account;