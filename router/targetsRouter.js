let router = require('express').Router();

router.get('/targets/:id/contracts', function(req,res) {
  let responceText = 'A Get request for the targets/:id/contracts';
  console.log(responceText);
  res.status(200).send(responceText);
});

module.export = router;
