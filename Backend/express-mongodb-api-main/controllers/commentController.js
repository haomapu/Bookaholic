const Comment = require("../model/comment");
const Account = require("../model/account");
const Book = require("../model/book");
const commentController = {

    getAllComment : async (req,res) => {
        try{
            const comments = await Comment.find();
            res.status(200).send(comments);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    createComment : async(req, res) => {
        try {
            const newComment = new Comment(req.body);
            const savedComment = await newComment.save();
            if(req.body.user){
                const account = Account.findById(req.body.user);
                await account.updateOne({$push: {comments: savedComment._id}});
            }   

            if(req.body.book){
                const book = Book.findById(req.body.book);
                await book.updateOne({$push: {comments: savedComment._id}});
            }   
            res.status(200).json(savedComment);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    getComment : async(req, res) => {
        try {
            const comment = await Comment.findById(req.params.id).populate("user").populate("book");
            res.status(200).json(comment);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    updateComment : async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            await comment.updateOne({$set: req.body});
            res.status(200).json("Update Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },

    deleteComment : async (req, res) => {
        try {
            await Account.updateMany({comments:req.params.id}, {$pull : {comments:req.params.id}});
            await Book.updateMany({comments:req.params.id}, {$pull : {comments : req.params.id}});
            const comment = await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    }
};

module.exports = commentController;