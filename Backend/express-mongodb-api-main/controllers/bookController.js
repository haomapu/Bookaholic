const Book = require("../model/book");

const bookController = {

    getAllBook : async (req,res) => {
        try{
            const books = await Book.find();
            res.status(200).send(books);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    createBook : async(req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            res.status(200).json(savedBook);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    getBook : async(req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            res.status(200).json(book);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    updateBook : async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({$set: req.body});
            res.status(200).json("Update Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },

    deleteBook : async (req, res) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;