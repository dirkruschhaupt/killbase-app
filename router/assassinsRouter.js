let router = require('express').Router();

router.get('/assassins', function(req,res) {
  knex('assassins')
    .orderBy('id')
    .then((assassins) => {
      res.send(assassins);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/assassins/:id', function(req, res) {
  knex('assassins')
    .where('id', req.params.id)
    .first()
    .then((assassins) => {
      if (!assassins) {
        return next();
      }

      res.send(assassins);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/assassins', function(req,res) {
  knex('assassins')
        .insert({
            full_name: req.body.full_name,
            weapon: req.body.weapon,
            contact_info: req.body.contact_info,
            age: req.body.age,
            price: req.body.price,
            rating: req.body.rating,
            kills: req.body.kills
        }, '*')
        .then((assassins) => {
            res.send(assassins[0]);
        })
        .catch((err) => {
            next(err);
        });
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

module.export = router;
