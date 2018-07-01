'use strict'

let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let port = process.env.PORT || 8000;
let morgan = require('morgan');

let assassinsRouter = require('./router/assassinsRouter');
let targetsRouter = require('./router/targetsRouter');
let contractsRouter = require('./router/contractsRouter');
let clientsRouter = require('./router/clientsRouter');
let codenamesRouter = require('./router/codenamesRouter');
let assassins_contractsRouter = require('./router/assassins_contractsRouter');

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('short'));

app.use(assassinsRouter);
app.use(targetsRouter);
app.use(contractsRouter);
app.use(clientsRouter);
app.use(codenamesRouter);
app.use(assassins_contractsRouter);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});


'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

// const knexPath = path.join(__dirname, 'knexfile.js');
const cookieParser = require('cookie-parser');

// const env = 'development';
// const config = require(knexPath)[env];
// const knex = require('knex')(config);


let assassins = require('./routes/assassinroutes');
let codeNames = require('./routes/codenamesroutes');
let targets = require('./routes/targetroutes');
let clients = require('./routes/clientroutes');
let contracts= require('./routes/contractroutes');
let assassinContracts = require('./routes/assassincontractroutes');

app.set('view engine', 'ejs');

app.disable('x-powered-by');

app.use(morgan('short'));
app.use(bodyParser.json()); //allows us to use request.body to retrieve data from front-end
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


app.use(express.static(path.join('public'))); //gives us access to public folder

app.use(assassins); //allows us to use our routes
app.use(codeNames);
app.use(targets);
app.use(clients);
app.use(contracts);
app.use(assassinContracts);

app.use(function(req, res) {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app;
