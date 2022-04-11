// server.js
// where your node app starts

// init project
require('dotenv').config();
const formatDate = require('./utils/formatDate');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.render('index', {
    dateInfo: JSON.stringify(formatDate())
  });
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:date?', (req, res) => {
  let { date } = req.params;
  try {
    const dateNow = formatDate(date);
    return res.json(dateNow);
  } catch (err) {
    return res.json({error: err.message});
  }
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
