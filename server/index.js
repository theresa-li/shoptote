const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

const verifyUser = async(accessToken) => {
  let id = await fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${ accessToken }`)
    .then(res => res.json())
    .then(res => res.user_id);
  return id;
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/getContent/:userID/:accessToken', async(req, res) => {
  let user = await verifyUser(req.params.accessToken);
  if (user === req.params.userID) {
    res.send({content: 'You wanted some content?'});
  }
});

app.listen(port, () => console.log(`Listening on port ${ port }`));
