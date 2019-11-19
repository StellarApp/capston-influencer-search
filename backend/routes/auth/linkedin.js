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
        const accessToken = await getAccessToken(code);
        res.send(`access token: ${accessToken.access_token}`);
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
