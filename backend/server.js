require('dotenv').config();

const db = require('./data');
const app = require('./app');
const port = process.env.PORT || 3000;

db.sync(true).then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});
