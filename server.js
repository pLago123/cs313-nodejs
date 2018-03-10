const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Start the app
const app = express();

// Load View Engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});

// Get the data from the form
app.post('/getRate', function(req, res) {
  var params = {
    mail: req.body.mail,
    weight: req.body.weight
  }
  res.json(params);
});

// Start the server 
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`);
});