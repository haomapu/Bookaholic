const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get('/', userController.getAllUser);

router.get('/:id', userController.getUser);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.put('/:id/wishlist', userController.updateWishlist);

router.put('/:id/wishlist/remove', userController.deleteBookFromWishList);
module.exports = router;