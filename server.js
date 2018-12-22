//Install express server
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const routes = require('./routers/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/frontend'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization,   Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});
routes(app);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8880);
