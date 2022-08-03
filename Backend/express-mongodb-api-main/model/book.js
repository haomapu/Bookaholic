const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    bookImg: {
        type: String,
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
        type: [Number]
    },
    pending: {
        type: Boolean,
        default: false
    }
});

let Book = mongoose.model("Book", bookSchema);
module.exports = Book;