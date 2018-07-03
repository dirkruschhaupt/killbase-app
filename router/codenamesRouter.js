'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/codenames', function(req,res) {
  knex('codenames')
    .orderBy('id')
    .then((codenames) => {
      res.send(codenames);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/codenames/:id', function(req, res) {
  knex('codenames')
    .where('id', req.params.id)
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

router.post('/codenames', function(req,res) {
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

router.patch('/codenames/:id', function(req,res) {
  knex('codenames')
    .where('id', req.params.id)
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
        .where('id', req.params.id);
      })
      .then((codenames) => {
        res.send(codenames[0]);
      })
      .catch((err) => {
        next(err);
      });
    });

    router.delete('/codenames/:id', (req, res, next) => {
       let codename;

       knex('codenames')
           .where('id', req.params.id)
           .first()
           .then((row) => {
               if (!row) {
                   return next();
               }

               target = row;

               return knex('codenames')
                   .del()
                   .where('id', req.params.id);
           })
           .then(() => {
               delete codename.id;
               res.send(codename);
           })
           .catch((err) => {
               next(err);
           });
    });

module.exports = router;
