const mongoose = require("mongoose");
const Book = require("./book");
const Account = require("./account");

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
    },

    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    },

    description: {
        type: String,
        required: true
    },

    time: {
        type: Date,
    }
});

let Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;