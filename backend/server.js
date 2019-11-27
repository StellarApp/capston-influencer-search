require("dotenv").config();

const db = require("./data");
const app = require("./app");
const port = process.env.PORT || 3000;
const fs = require("fs");
const https = require("https");

db.sync(true).then(() => {
  // enable https in Express
  https
    .createServer(
      {
        key: fs.readFileSync("server.key"),
        cert: fs.readFileSync("server.cert")
      },
      app
    )
    .listen(port, function() {
      console.log(`listening on port ${port}`);
    });
});
