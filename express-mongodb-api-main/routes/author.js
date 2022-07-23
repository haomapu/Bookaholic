const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

router.get('/', authorController.getAllAuthor);

router.get('/:id', authorController.getAuthor);

router.post('/', authorController.createAuthor);

router.put('/:id', authorController.updateAuthor);

router.delete('/:id', authorController.deleteAuthor);

module.exports = router;