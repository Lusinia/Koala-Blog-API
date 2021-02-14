const mongoose = require('mongoose');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

const getAll = async (ctx) => {
  const { params: { postId }, query: { limit, page } } = ctx;
  const skip = limit * (page - 1);
  const data = await Comment.aggregate([
    {
      $match: {
        post: mongoose.Types.ObjectId(postId)
      }
    },
    { $skip: skip },
    { $limit: +limit },
    {
      $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        as: 'author'
      }
    }
  ]);
  const count = await Comment.count({ post: postId });
  ctx.sendCreated({ data, maxCount: count });
};

const getById = async ({ sendCreated, params: { postId } }) => {
  const data = await Post.findById(postId).populate('author').exec();
  sendCreated(data);
};

const create = async ({ sendCreated, sendError, user, request: { body }, params: { postId } }) => {
  if (user) {
    body.author = user._id;
    body.post = postId;
    body.text = body.data;
    const created = await Comment.create(body);
    const comment = await Comment.findById(created._id).populate('author').exec();
    sendCreated(comment);
  } else {
    sendError('Only signed in users can add comments');
  }
};

const update = async ({ sendCreated, sendError, request: { body }, params: { postId }, user }) => {
  try {
    const comment = await Comment.findById(postId);
    if (user && comment && user._id.toString() === comment.author.toString()) {
      await Comment.findOneAndUpdate({ _id: postId }, { $set: { ...body, updatedAt: new Date() } }, { new: false });
      sendCreated({ comment, postId });
    } else {
      sendError('Something went wrong');
    }
  } catch (e) {
    console.log(e.message);
  }
};

const remove = async ({ sendSuccess, params: { id } }) => {
  await Post.findByIdAndDelete(id);
  sendSuccess();
};

module.exports = {
  getAll, getById, create, remove, update
};
