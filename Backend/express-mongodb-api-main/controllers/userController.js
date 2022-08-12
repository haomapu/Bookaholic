const User = require("../model/account");
const Comment = require("../model/comment");
const Book = require("../model/book");

const userController = {

    getAllUser : async (req, res) => {
        try{
            const users = await User.find();
            res.status(200).json(users);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    
    createUser : async (req, res) => {
        try{
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    getUser : async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate("comments").populate("books");
            res.status(200).json(user);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    updateUser : async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$set : req.body});
            res.status(200).json("Update Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },

    deleteUser : async (req, res) => {
        try {
            await Book.updateMany({account:req.params.id}, {account:null});
            await Comment.updateMany({user:req.params.id}, {user:null});
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },

    updateWishlist : async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$push : req.body});
            res.status(200).json("Update Wishlist Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    },

    deleteBookFromWishList: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$pull : req.body});
            res.status(200).json("Update Wishlist Successfully");
        }catch(err) {
            res.status(500).json(err);
        }
    }
};

module.exports = userController
