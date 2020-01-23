let express = require('express');
let router = express.Router();
let postCtrl = require('../controllers/posts');

router.get('/', postCtrl.getPosts);
router.post('/', postCtrl.createPost);
router.get('/:id', postCtrl.getOnePost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;