let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8000;

let assassinsRouter = require('./router/assassinsRouter');
let targetsRouter = require('./router/targetsRouter');
let contractsRouter = require('./router/contractsRouter');
let clientsRouter = require('./router/clientsRouter');
let codenamesRouter = require('./router/codenamesRouter');
let assassins_contractsRouter = require('./router/assassins_contractsRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(assassinsRouter);
app.use(targetsRouter);
app.use(contractsRouter);
app.use(clientsRouter);
app.use(codenamesRouter);
app.use(assassins_contractsRouter);

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
