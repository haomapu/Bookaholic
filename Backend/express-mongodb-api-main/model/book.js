const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
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
    }
});

let Book = mongoose.model("Book", bookSchema);
module.exports = Book;