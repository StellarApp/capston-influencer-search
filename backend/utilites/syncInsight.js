const axios = require('axios');

const { CreatorInsight } = require('../data').models;
const app_version = process.env.FB_APP_VERSION;
const api = process.env.FB_API;

const getMediaMetadata = (media, mediaCount, followersCount) => {
  let totalLikes = 0;
  let totalComments = 0;
  let mostLikedPost = null;
  let mostCommentedPost = null;
  let mostEngagedPost = null;

  media.forEach(medium => {
    totalLikes += medium.like_count;
    totalComments += medium.comments_count;
    if (!mostLikedPost || medium.like_count > mostLikedPost.like_count) {
      mostLikedPost = medium;
    }
    if (
      !mostCommentedPost ||
      medium.comments_count > mostCommentedPost.comments_count
    ) {
      mostCommentedPost = medium;
    }
    if (
      !mostEngagedPost ||
      medium.like_count + medium.comments_count >
        mostEngagedPost.like_count + mostEngagedPost.comments_count
    ) {
      mostEngagedPost = medium;
    }
  });

  const engagementRate =
    ((totalLikes + totalComments) / (mediaCount * followersCount)) * 100;

  return {
    totalLikes,
    totalComments,
    mostLikedPost,
    mostCommentedPost,
    mostEngagedPost,
    engagementRate
  };
};

const syncUserInsight = async (instagramId, creatorId, accessToken) => {
  const fields = [
    'followers_count',
    'follows_count',
    'media_count',
    'name',
    'profile_picture_url',
    'username',
    'website',
    'biography',
    'media.limit(5000){id,like_count,comments_count,media_url}',
    'insights.metric(audience_city,audience_gender_age).period(lifetime)'
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
    biography,
    media,
    insights
  } = (await axios.get(link)).data;

  let audienceCity;
  let audienceGenderAge;

  if (insights && insights.data && insights.data.length >= 2) {
    audienceCity = insights.data[0].values[0].value;
    audienceGenderAge = insights.data[1].values[0].value;
  }

  const insight = {
    igName: username,
    biography,
    profilePictureUrl: profile_picture_url,
    followersCount: followers_count,
    followsCount: follows_count,
    mediaCount: media_count,
    ...getMediaMetadata(media.data, media_count, followers_count),
    audienceCity,
    audienceGenderAge,
    creatorId
  };

  await CreatorInsight.create(insight);
};

module.exports = { syncUserInsight };
