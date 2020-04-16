const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/getContent', (req, res) => res.send({content: 'You wanted some content?'}));

app.listen(port, () => console.log(`Listening on port ${ port }`));
