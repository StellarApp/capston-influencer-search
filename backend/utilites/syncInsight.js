require("dotenv").config();
const axios = require("axios");
const app_version = process.env.FB_APP_VERSION;
const api = "https://graph.facebook.com";

const syncUserInsight = (instagramId, access_token) => {
  // Make a request for a user with a given ID
  const fields = [
    "followers_count",
    "follows_count",
    "media_count",
    "name",
    "profile_picture_url",
    "username",
    "website",
    "biography"
  ];
  const link = `${api}/${app_version}/${instagramId}?fields=${fields.join(
    ","
  )}&access_token=${access_token}`;
  axios
    .get(link)
    .then(function(response) {
      // handle success
      console.log("INSIGHT", response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
};

module.exports = { syncUserInsight };
