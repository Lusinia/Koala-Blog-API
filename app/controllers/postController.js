const Post = require('../models/postModel');
const cloudinary = require('cloudinary');

const getAll = async (ctx) => {
  const data = await Post.find({}).populate('author').exec();
  ctx.sendCreated(data);
};

const getById = async ({ sendCreated, params: { id } }) => {
  const data = await Post.findById(id).populate('author').exec();
  sendCreated(data);
};

const createPost = async ({ sendCreated, sendError, user, request: { body } }) => {
  if (user) {
    if (body.imageURL) {
      const result = await cloudinary.uploader.upload(body.imageURL);
      body.imageURL = result.secure_url;
    }
    body.author = user._id;
    const post = await Post.create(body);
    sendCreated(post);
  } else {
    sendError('Action is denied');
  }
};

const updatePost = async ({ sendCreated, sendError, request: { body }, params: { id }, user }) => {
  try {
    const post = await Post.findById(id);
    if (user && post && user._id.toString() === post.author.toString()) {
      if (body.imageURL) {
        const result = await cloudinary.uploader.upload(body.imageURL);
        body.imageURL = result.secure_url;
      }

      await Post.findOneAndUpdate({ _id: id }, { $set: { ...body, updatedAt: new Date() } }, { new: false });
      sendCreated(post);
    } else {
      sendError('Something went wrong');
    }
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
