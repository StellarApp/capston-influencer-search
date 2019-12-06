require("dotenv").config();
const fs = require("fs");
const https = require("https");

const db = require("./data");
const app = require("./app");
const port = process.env.PORT || 3000;

const startUpCallback = () => console.log(`listening on port ${port}`);

db.sync(true).then(() => {
  if (process.env.NODE_ENV === "production") {
    app.listen(port, startUpCallback);
  } else {
    https
      .createServer(
        {
          key: fs.readFileSync("server.key"),
          cert: fs.readFileSync("server.cert")
        },
        app
      )
      .listen(port, startUpCallback);
  }
});
