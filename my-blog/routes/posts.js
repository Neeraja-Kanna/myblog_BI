const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts });
});

// Create new post form
router.get('/new', (req, res) => {
  res.render('create');
});

// Create new post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.redirect('/posts');
});

// Edit post form
router.get('/:id/edit', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit', { post });
});

// Update post
router.post('/:id', async (req, res) => {
  const { title, content } = req.body;
  await Post.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect('/posts');
});

// View single post
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});

// Delete post
router.post('/:id/delete', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/posts');
});

module.exports = router;
