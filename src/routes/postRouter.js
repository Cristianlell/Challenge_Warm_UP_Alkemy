let express = require('express');
let router = express.Router();

let postController = require('../controllers/postController');
const postUpdateValidation = require('../validations/postUpdateValidation');
const postValidation = require('../validations/postValidation');

router.get('/', postController.list);
router.get('/:id', postController.detail);

router.post('/', postValidation,postController.create);

router.patch('/:id',postUpdateValidation, postController.update);

router.delete('/:id', postController.delete);

module.exports = router;
