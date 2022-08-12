const Book = require("../model/book");
const Account = require("../model/account");
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
            if(req.body.account){
                const account = Account.findById(req.body.account);
                await account.updateOne({$push: {books: savedBook._id}});
            }   
            res.status(200).json(savedBook);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    getBook : async(req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("account").populate("comments");
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
            await Account.updateMany({books:req.params.id}, {$pull : {books : req.params.id}});
            await Comment.updateMany({book:req.params.id}, {$pull : {book : req.params.id}});
            const book = await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;