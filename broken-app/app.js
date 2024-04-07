const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    const usernames = req.body.developers;

    const promises = usernames.map(async username => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return { name: response.data.name, bio: response.data.bio };
    });

    const results = await Promise.all(promises);
    res.send(JSON.stringify(results));
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
