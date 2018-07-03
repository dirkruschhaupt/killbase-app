'use strict'

// let fs = require('fs');
let express = require('express');
let path = require('path');
let app = express();
let port = process.env.PORT || 8000;

let morgan = require('morgan');
let bodyParser = require('body-parser');

let assassinsRouter = require('./router/assassinsRouter');
let targetsRouter = require('./router/targetsRouter');
let contractsRouter = require('./router/contractsRouter');
let clientsRouter = require('./router/clientsRouter');
let codenamesRouter = require('./router/codenamesRouter');
let assassins_contractsRouter = require('./router/assassins_contractsRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join('public')));

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

module.exports = app;
