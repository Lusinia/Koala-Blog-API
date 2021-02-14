const randomDate = require('../utils/randomizeDate');
const date = randomDate(new Date(2012, 0, 1), new Date());
const updatedAt = randomDate(date, new Date());

module.exports = [
  {
    imageURL: 'https://4.bp.blogspot.com/-EMeuhDkApoc/WtinIelAkHI/AAAAAAAABMQ/mlss9kdL1fEL1s-6aKLN7GI3RX3pmjDNgCLcBGAs/s1600/pexels-photo-125521.jpeg',
    body: 'Cute post about mountains',
    title: 'How I spent my weekend',
    date: date,
    updatedAt: updatedAt
  },
  {
    imageURL: 'https://4.bp.blogspot.com/-wleEdkvOU5A/Wf7h03BlqLI/AAAAAAAAA3U/NnuE8PMD3NYzBTo0OAG_T56zSUE00NhgwCLcBGAs/s1600/pexels-photo-416676.jpeg',
    body: 'Hot water better than snow',
    title: 'Bla bla bla',
    date: date,
    updatedAt: updatedAt
  },
  {
    imageURL: 'https://4.bp.blogspot.com/-QD4BBaXgMlk/WtjlLaSndDI/AAAAAAAABO0/vZa6Wm-XCUk_eZv-ikRVZMQ_4zsZ-iI9QCLcBGAs/s1600/300.png',
    body: 'Not sure about it',
    title: 'no ads please',
    date: date,
    updatedAt: updatedAt
  },
  {
    imageURL: 'https://4.bp.blogspot.com/-EMeuhDkApoc/WtinIelAkHI/AAAAAAAABMQ/mlss9kdL1fEL1s-6aKLN7GI3RX3pmjDNgCLcBGAs/s1600/pexels-photo-125521.jpeg',
    body: 'Many lorem ipsum',
    title: 'Fug',
    date: date,
    updatedAt: updatedAt
  }
];
