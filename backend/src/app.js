const express = require('express');
const cors = require('cors');

const postsRoutes = require('./routes/posts.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'UP',
    message: 'Posts API is running'
  });
});

app.use('/api/posts', postsRoutes);

module.exports = app;