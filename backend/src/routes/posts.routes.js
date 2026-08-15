const express = require('express');

const {
  getPosts,
  getPostById,
  likePost
} = require('../controllers/posts.controller');

const router = express.Router();

router.get('/', getPosts);

router.get('/:id', getPostById);

router.post('/:id/like', likePost);

module.exports = router;