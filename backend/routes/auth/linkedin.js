const axios = require('axios');
const qs = require('querystring');
const router = require('express').Router();

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

const getMemberProfile = async accessToken => {
  const profileUrl = 'https://api.linkedin.com/v2/me';
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  return (await axios.get(profileUrl, config)).data;
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
        console.log('memberProfile', memberProfile);
        res.send('done');
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
