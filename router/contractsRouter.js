'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/contracts', function(req, res, next) {
  knex('contracts')
    .orderBy('id')
    .then((contracts) => {
      res.render('contracts', {data: contracts});
      //res.send(contracts);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/contracts/:id', function(req, res, next) {
  knex('contracts')
    .where('id', req.params.id)
    .first()
    .then((contracts) => {
      if (!contracts) {
        return next();
      }

      res.send(contracts);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/contracts', function(req, res, next) {
  knex('contracts')
        .insert({
            target_id: req.body.target_id,
            client_id: req.body.client_id,
            budget: req.body.budget,
            completed: req.body.completed,
            assassins_id: req.body.assassins_id
        }, '*')
        .then((contracts) => {
            res.send(contracts[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/contracts/:id', function(req, res, next) {
  knex('contracts')
    .where('id', req.params.id)
    .first()
    .then((contracts) => {
      if (!contracts) {
        return next();
      }
      return knex('contracts')
        .update({
          target_id: req.body.target_id,
          client_id: req.body.client_id,
          budget: req.body.budget,
          completed: req.body.completed,
          assassins_id: req.body.assassins_id
        }, '*')
        .where('id', req.params.id);
      })
      .then((contracts) => {
        res.send(contracts[0]);
      })
      .catch((err) => {
        next(err);
      });
    });

    router.delete('/contracts/:id', (req, res, next) => {
       let contract;

       knex('contracts')
           .where('id', req.params.id)
           .first()
           .then((row) => {
               if (!row) {
                   return next();
               }

               target = row;

               return knex('contracts')
                   .del()
                   .where('id', req.params.id);
           })
           .then(() => {
               delete contract.id;
               res.send(contract);
           })
           .catch((err) => {
               next(err);
           });
    });

module.exports = router;
