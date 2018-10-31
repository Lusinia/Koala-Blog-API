const Post = require('../models/postModel');
const cloudinary = require('cloudinary');

const getAll = async ({ sendCreated }) => {
  const data = await Post.find({});
  sendCreated(data);
};

const getById = async ({ sendCreated, params: { id } }) => {
  const data = await Post.findById(id);
  sendCreated(data);
};

const createPost = async ({ sendCreated, request: { body } }) => {
  if (body.imageURL) {
    const result = await cloudinary.uploader.upload(body.imageURL);
    body.imageURL = result.secure_url;
  }
  const post = await Post.create(body);
  sendCreated(post);
};

const updatePost = async ({ sendCreated, request: { body }, params: { id } }) => {
  try {
    if (body.imageURL) {
      const result = await cloudinary.uploader.upload(body.imageURL);
      body.imageURL = result.secure_url;
    }
    const post = await Post.findOneAndUpdate({ _id: id }, { $set: body }, { new: false });
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
