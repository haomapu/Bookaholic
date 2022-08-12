const mongoose = require("mongoose");
const Comment = require("./comment");
const Account = require("./account");

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        unique:true,
        required: true
    },

    bookImg: {
        type: String,
        default: null
    },

    description: {
        type: String
    },

    publishedDate: {
        type: String,
    },

    genre: {
        type: [String],
    },

    author: {
        type: String,
    },

    rating: {
        type: [Number],
        default: null
    },

    pending: {
        type: Boolean,
        default: false
    },

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],

    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
    },
});

let Book = mongoose.model("Book", bookSchema);
module.exports = Book;