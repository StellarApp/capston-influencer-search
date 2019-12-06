const axios = require('axios');
const qs = require('querystring');
const router = require('express').Router();

const { Business } = require('../../data').models;

const {
  LINKEDIN_STATE,
  LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET,
  LINKEDIN_REDIRECT_URI
} = process.env;

const getAccessToken = async code => {
  const accessTokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
  const requestBody = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: LINKEDIN_REDIRECT_URI,
    client_id: LINKEDIN_CLIENT_ID,
    client_secret: LINKEDIN_CLIENT_SECRET
  };
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  return (await axios.post(accessTokenUrl, qs.stringify(requestBody), config))
    .data;
};

const extractProfilePicUrl = displayImageObject => {
  const profilePicArray = displayImageObject.elements;
  if (profilePicArray && profilePicArray.length) {
    const largestProfilePic = profilePicArray.pop();
    return largestProfilePic.identifiers[0].identifier;
  }

  return null;
};

const getMemberProfile = async accessToken => {
  const profileUrl =
    'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))';
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  const { id, localizedLastName, localizedFirstName, profilePicture } = (
    await axios.get(profileUrl, config)
  ).data;

  return {
    linkedInId: id,
    firstName: localizedFirstName,
    lastName: localizedLastName,
    imageUrl: extractProfilePicUrl(profilePicture['displayImage~'])
  };
};

const extractEmail = emailObject => {
  const emailArray = emailObject.elements;
  if (emailArray && emailArray.length) {
    const emailData = emailArray.shift();
    return emailData['handle~'].emailAddress;
  }

  return null;
};

const getMemberEmail = async accessToken => {
  const emailUrl =
    'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  const emailObject = (await axios.get(emailUrl, config)).data;
  return extractEmail(emailObject);
};

router.get('/', (req, res) => {
  const authorizationUrl = 'https://www.linkedin.com/oauth/v2/authorization';
  const queryParams = {
    response_type: 'code',
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT_URI,
    state: LINKEDIN_STATE,
    scope: 'r_liteprofile r_emailaddress'
  };
  res.redirect(`${authorizationUrl}?${qs.stringify(queryParams)}`);
});

router.get('/callback', async (req, res, next) => {
  const { code, state, error } = req.query;

  if (!error) {
    if (state !== LINKEDIN_STATE) {
      console.log(
        `State returned by LinkedIn ${state} does not match our provided state ${LINKEDIN_STATE}.`
      );
      next({ status: 401 });
    } else {
      try {
        const { access_token } = await getAccessToken(code);
        const memberProfile = await getMemberProfile(access_token);
        const email = await getMemberEmail(access_token);

        const businessUser = await Business.authenticate({
          ...memberProfile,
          email
        });

        res.redirect(
          `/?business_id=${businessUser.id}&token=${access_token}#creators`
        );
      } catch (e) {
        console.log('exception', e);
        next(e);
      }
    }
  } else {
    console.log('error', error);
    next(error);
  }
});

module.exports = router;
