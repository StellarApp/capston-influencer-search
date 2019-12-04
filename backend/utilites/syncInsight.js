const axios = require('axios');

const { CreatorInsight } = require('../data').models;
const app_version = process.env.FB_APP_VERSION;
const api = process.env.FB_API;

const syncUserInsight = async (instagramId, creatorId, accessToken) => {
  const fields = [
    'followers_count',
    'follows_count',
    'media_count',
    'name',
    'profile_picture_url',
    'username',
    'website',
    'biography'
  ];

  const link = `${api}/${app_version}/${instagramId}?fields=${fields.join(
    ','
  )}&access_token=${accessToken}`;

  const {
    followers_count,
    follows_count,
    media_count,
    profile_picture_url,
    username,
    biography
  } = (await axios.get(link)).data;

  const insight = {
    igName: username,
    biography,
    profilePictureUrl: profile_picture_url,
    followersCount: followers_count,
    followsCount: follows_count,
    mediaCount: media_count,
    creatorId
  };

  await CreatorInsight.create(insight);
};

module.exports = { syncUserInsight };
