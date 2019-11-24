# Connect Creator

## Setup project locally

1. Clone the repository.
2. Install dependencies:

`npm install`

This command generates 2 files: `package-lock.json` and `frontend/assets/index.js` which are both included in the [`.gitignore`](./.gitignore) file.

3. Copy `.env.sample` as your `.env` file.
   1. The LinkedIn Client ID and Client Secret will be found in the [Connect Creator App Page](https://www.linkedin.com/developers/apps/60613496/auth). You may request access from the current team members.
   2. For development purposes, you may use any string as the LinkedIn State.
   3. The Facebook App ID, App Ver. and Instagram App ID will be found in the [Connect Creator App] (https://developers.facebook.com/apps/507675923424391/). You may request access from the current team members.