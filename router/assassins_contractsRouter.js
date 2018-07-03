'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/assassins_contracts', function(req,res) {
  knex('assassins_contracts')
    .orderBy('id')
    .then((assassins_contracts) => {
      res.send(assassins_contracts);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/assassins_contracts/:id', function(req, res) {
  knex('assassins_contracts')
    .where('id', req.params.id)
    .first()
    .then((assassins_contracts) => {
      if (!assassins_contracts) {
        return next();
      }

      res.send(assassins_contracts);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/assassins_contracts', function(req,res) {
  knex('assassins_contracts')
        .insert({
            assassins_id: req.body.assassins_id,
            contract_id: req.body.contract_id
        }, '*')
        .then((assassins_contracts) => {
            res.send(assassins_contracts[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/assassins_contracts/:id', function(req,res) {
  knex('assassins_contracts')
    .where('id', req.params.id)
    .first()
    .then((assassins_contracts) => {
      if (!assassins_contracts) {
        return next();
      }
      return knex('assassins_contracts')
        .update({
          assassins_id: req.body.assassins_id,
          contract_id: req.body.contract_id
        }, '*')
        .where('id', req.params.id);
      })
      .then((assassins_contracts) => {
        res.send(assassins_contracts[0]);
      })
      .catch((err) => {
        next(err);
      });
    });

    router.delete('/assassins_contracts/:id', (req, res, next) => {
       let assassincontract;

       knex('assassins_contracts')
           .where('id', req.params.id)
           .first()
           .then((row) => {
               if (!row) {
                   return next();
               }

               target = row;

               return knex('assassins_contracts')
                   .del()
                   .where('id', req.params.id);
           })
           .then(() => {
               delete assassincontract.id;
               res.send(assassincontract);
           })
           .catch((err) => {
               next(err);
           });
    });

module.exports = router;
