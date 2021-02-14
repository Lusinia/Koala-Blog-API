const randomDate = require('../utils/randomizeDate');
const date = randomDate(new Date(2012, 0, 1), new Date());
const registrated = randomDate(date, new Date());

module.exports = [
  {
    firstName: 'Anna',
    password: 'fff',
    lastName: 'Smith',
    lastVisited: date,
    registerDate: registrated,
    email: 'anna@gmail.com'
  },
  {
    firstName: 'Serg',
    lastName: 'Valensky',
    password: 'fff',
    lastVisited: date,
    registerDate: registrated,
    email: 'serg@gmail.com'
  },
  {
    firstName: 'Lina',
    lastName: 'Stash',
    password: 'fff',
    lastVisited: date,
    registerDate: registrated,
    email: 'lina@gmail.com'
  },
  {
    firstName: 'Mia',
    lastName: 'Black',
    lastVisited: date,
    password: 'fff',
    registerDate: registrated,
    email: 'mia@gmail.com'
  }
];
