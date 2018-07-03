let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/assassins', function(req,res) {
  let responceText = 'A Get request for the assassins';
  console.log(responceText);
  res.status(200).send(responceText);
});

router.get('/assassins/:id', function(req, res) {
  let responceText = 'A Get request for the assassins/id';
  console.log(responceText);
  res.status(200).send(responceText);
});

router.post('/assassins', function(req,res) {
  let responceText = 'A Post request for the assassins';
  console.log(responceText);
  res.status(200).send(responceText);
});

router.post('/assassins/:id', function(req,res) {
  let responceText = 'A Post request for the assassins/id';
  console.log(responceText);
  res.status(200).send(responceText);
});

router.get('/assassins/:id/contracts', function(req,res) {
  let responceText = 'A Get request for the assassins/id/contracts';
  console.log(responceText);
  res.status(200).send(responceText);
});

router.get('/assassins/:id/codenames', function(req,res) {
  let responceText = 'A Get request for the assassins/:id/codenames';
  console.log(responceText);
  res.status(200).send(responceText);
});

router.delete('/assassins/:id', function(req,res) {
  let responceText = 'A Delete request for the assassins/:id';
  console.log(responceText);
  res.status(200).send(responceText);
});

module.exports = router;
