require("dotenv").config();
const axios = require("axios");
// import { connect } from "react-redux";
const { CreatorInsight } = require("../data/models/");
const app_version = process.env.FB_APP_VERSION;
const api = "https://graph.facebook.com";

const syncUserInsight = (instagramId, creatorId, accessToken) => {
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
  )}&access_token=${accessToken}`;
  axios
    .get(link)
    .then(function(response) {
      // handle success
      const {
        followers_count,
        follows_count,
        media_count,
        profile_picture_url,
        username,
        biography
      } = response.data;

      const insight = {
        igName: username,
        biography,
        profilePictureUrl: profile_picture_url,
        followersCount: followers_count,
        followsCount: follows_count,
        mediaCount: media_count,
        creatorId
      };
      CreatorInsight.create(insight);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
};

const syncUserMedia = (instagramId, accessToken) => {};

module.exports = { syncUserInsight };
