const randomDate = require('../utils/randomizeDate');
const date = randomDate(new Date(2012, 0, 1), new Date());
const updatedAt = randomDate(date, new Date());

module.exports = [
  {
    text: 'How I spent my weekend',
    createdAt: date ,
    updatedAt: updatedAt
  },
  {
    text: 'How I spent my weekend',
    createdAt: date ,
    updatedAt: updatedAt
  },
  {
    text: 'LLLLLKJLKJLKJLKJ',
    createdAt: date ,
    updatedAt: updatedAt
  },
  {
    text: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
    createdAt: date ,
    updatedAt: updatedAt
  }
];
