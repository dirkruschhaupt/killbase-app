'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/targets', function(req,res) {
  knex('targets')
    .orderBy('id')
    .then((targets) => {
      res.send(targets);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/targets/:id', function(req, res) {
  knex('targets')
    .where('id', req.params.id)
    .first()
    .then((targets) => {
      if (!targets) {
        return next();
      }

      res.send(targets);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/targets', function(req,res) {
  knex('targets')
        .insert({
            targets_name: req.body.targets_name,
            location: req.body.location,
            photo: req.body.photo,
            security_level: req.body.security_level
        }, '*')
        .then((targets) => {
            res.send(targets[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/targets/:id', function(req,res) {
  knex('targets')
    .where('id', req.params.id)
    .first()
    .then((targets) => {
      if (!targets) {
        return next();
      }
      return knex('targets')
        .update({
          targets_name: req.body.targets_name,
          location: req.body.location,
          photo: req.body.photo,
          security_level: req.body.security_level
        }, '*')
        .where('id', req.params.id);
      })
      .then((targets) => {
        res.send(targets[0]);
      })
      .catch((err) => {
        next(err);
      });
    });

    router.delete('/targets/:id', (req, res, next) => {
       let target;

       knex('targets')
           .where('id', req.params.id)
           .first()
           .then((row) => {
               if (!row) {
                   return next();
               }

               target = row;

               return knex('targets')
                   .del()
                   .where('id', req.params.id);
           })
           .then(() => {
               delete target.id;
               res.send(target);
           })
           .catch((err) => {
               next(err);
           });
    });

module.exports = router;
