let router = require('express').Router();

router.get('/clients/:id/contracts', function(req,res) {
  let responceText = 'A Get request for the clients/:id/contracts';
  console.log(responceText);
  res.status(200).send(responceText);
});

module.export = router;
