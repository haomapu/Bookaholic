const mongoose = require("mongoose");
const Book = require("./book");
const Comment = require("./comment")
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

    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        },
    ],

    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            default: null
        },
    ],

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

let Account = mongoose.model("Account", accountSchema);
module.exports = Account;