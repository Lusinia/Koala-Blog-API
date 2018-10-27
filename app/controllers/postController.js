const Post = require('../models/postModel');

const getAll = async ctx => {
  const data = await Post.find({});
  ctx.body = { data };
};

const getById = async ({ query: { id } }) => {
  const data = await Post.findById(id);
  ctx.body = { data };
};

const createPost = async ({ request: { body } }) => {
  const post = new Post(body);
  post.save();
  ctx.response.status = 201;
};

module.exports = {
  getAll, getById, createPost
};
