const Post = require('../models/postModel');

const getAll = async ctx => {
  const data = await Post.find({});
  ctx.body = { data };
};

const getById = async ({ sendCreated, params: { id } }) => {
  const data = await Post.findById(id);
  sendCreated(data);
};

const createPost = async ({ sendCreated, request: { body } }) => {
  const post = await Post.create(body);
  sendCreated(post);
};

const updatePost = async ({ sendCreated, request: { body } }) => {
  try {
    const post = await Post.findByIdAndUpdate(body.id, body);
    sendCreated(post);
  } catch (e) {
    console.log(e.message);
  }
};

const deletePost = async ({ sendSuccess, params: { id } }) => {
  await Post.findByIdAndDelete(id);
  sendSuccess();
};

module.exports = {
  getAll, getById, createPost, deletePost, updatePost
};
