const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    rating:{
        type: [],
    },

    publishedDate: {
        type: String,
    },

    description: {
        type: String,
    },

    genres: {
        type: [String],
    },

    author: {
        type: String,
    },
});

let Book = mongoose.model("Book", bookSchema);
module.exports = Book;