const router = require("express").Router();


/* instagram authorization */
router.get("/", (req, res, next) => {
    const URL = `https://api.instagram.com/oauth/authorize
    ?app_id=${process.env.INSTAGRAM_APP_ID}
    &redirect_uri=${IG_REDIRECT_URI}
    &scope=user_profile,user_media
    &response_type=code`;
});

module.exports = router;