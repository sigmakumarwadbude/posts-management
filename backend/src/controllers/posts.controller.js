const posts = require('../data/posts');

const getPosts = (req, res) => {
  res.json(posts);
};

const getPostById = (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      message: 'Post not found'
    });
  }

  res.json(post);
};

const likePost = (req, res) => {
  const id = Number(req.params.id);

  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      message: 'Post not found'
    });
  }

  post.likes++;

  res.json(post);
};

module.exports = {
  getPosts,
  getPostById,
  likePost
};