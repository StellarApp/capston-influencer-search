const { Keyword } = require('./models');
const { Collection } = require('./models');

const keywordList = [
  'Adventure',
  'Art',
  'Baby',
  'Beauty',
  'Business',
  'Craft',
  'Decorating',
  'Design',
  'DIY',
  'Education',
  'Entertainment',
  'Fashion',
  'Film',
  'Finance',
  'Fitness',
  'Food',
  'Gaming',
  'Health',
  'Home Decor',
  'Humor',
  'Lifestyle',
  'Makeup',
  'Marketing',
  'Mom',
  'Music',
  'Outdoor',
  'Parenting',
  'Pet',
  'Photography',
  'Political',
  'Relationships',
  'Self-help',
  'Sewing',
  'Sports',
  'Tech',
  'Travel',
  'Wedding'
];

const seed = () =>
  Promise.all(keywordList.map(keyword => Keyword.create({ name: keyword })));
module.exports = seed;
