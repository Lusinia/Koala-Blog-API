const mongoose = require('mongoose');
const users = require('./users');
const posts = require('./posts');
const User = require('../models/userModel');
const Post = require('../models/postModel');

const createSeeds = async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Promise.all(users.map(async (item, index) => {
      const author = await User.create({
        _id: new mongoose.Types.ObjectId(),
        firstName: item.firstName,
        lastName: item.lastName,
        lastVisited: item.lastVisited,
        registerDate: item.registerDate,
        email: item.email
      });
      await Post.create({
        _id: new mongoose.Types.ObjectId(),
        imageURL: posts[index].imageURL,
        body: posts[index].body,
        title: posts[index].title,
        date: posts[index].date,
        updatedAt: posts[index].updatedAt,
        author: author._id
      });
    }));

    await Post.find().populate('author').exec();

  } catch (e) {
    console.log('cannot seed db');
    console.log(e.message);
  }

};

module.exports = createSeeds;
