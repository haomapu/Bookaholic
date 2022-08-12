const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get('/', bookController.getAllBook);

router.get('/pending', bookController.getBookPending);

router.get('/:id', bookController.getBook);

router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);

module.exports = router;