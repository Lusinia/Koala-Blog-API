const mongoose = require('mongoose');
const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');
const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

const createSeeds = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();
    await Promise.all(users.map(async (item, index) => {
      try {
        const author = await User.create({
          _id: new mongoose.Types.ObjectId(),
          firstName: item.firstName,
          lastName: item.lastName,
          password: item.password,
          lastVisited: item.lastVisited,
          registerDate: item.registerDate,
          email: item.email
        });
        const post = await Post.create({
          _id: new mongoose.Types.ObjectId(),
          imageURL: posts[index].imageURL,
          body: posts[index].body,
          title: posts[index].title,
          date: posts[index].date,
          updatedAt: posts[index].updatedAt,
          author: author._id
        });
        for (let i = 0; i < 40; i++) {
          await Comment.create({
            _id: new mongoose.Types.ObjectId(),
            text: `${i} ${comments[index].text}`,
            updatedAt: comments[index].updatedAt,
            createdAt: comments[index].createdAt,
            author: author._id,
            post: post._id,
          });
        }
      } catch (e) {
        console.log(e.message);
      }
    }));
  } catch (e) {
    console.log('cannot seed db');
    console.log(e.message);
  }

};

module.exports = createSeeds;
