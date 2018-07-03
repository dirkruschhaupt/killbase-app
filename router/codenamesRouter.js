'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/codenames', function(req, res, next) {
  knex('codenames')
    .orderBy('assassins_id')
    .then((codenames) => {
      res.send(codenames);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/codenames/:assassins_id', function(req, res, next) {
  knex('codenames')
    .where('assassins_id', req.params.assassins_id)
    .first()
    .then((codenames) => {
      if (!codenames) {
        return next();
      }

      res.send(codenames);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/codenames', function(req, res, next) {
  knex('codenames')
        .insert({
            assassins_id: req.body.assassins_id,
            code_name: req.body.code_name
        }, '*')
        .then((codenames) => {
            res.send(codenames[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/codenames/:assassins_id', function(req, res, next) {
  knex('codenames')
    .where('assassins_id', req.params.assassins_id)
    .first()
    .then((codenames) => {
      if (!codenames) {
        return next();
      }
      return knex('codenames')
        .update({
          assassins_id: req.body.assassins_id,
          code_name: req.body.code_name
        }, '*')
        .where('assassins_id', req.params.assassins_id);
      })
      .then((codenames) => {
        res.send(codenames[0]);
      })
      .catch((err) => {
        next(err);
      });
    });

    router.delete('/codenames/:assassins_id', (req, res, next) => {
       let codename;

       knex('codenames')
           .where('assassins_id', req.params.assassins_id)
           .first()
           .then((row) => {
               if (!row) {
                   return next();
               }

               target = row;

               return knex('codenames')
                   .del()
                   .where('assassins_id', req.params.assassins_id);
           })
           .then(() => {
               delete codename.assassins_id;
               res.send(codename);
           })
           .catch((err) => {
               next(err);
           });
    });

module.exports = router;
