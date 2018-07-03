'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/clients', function(req,res) {
  knex('clients')
    .orderBy('id')
    .then((clients) => {
      res.send(clients);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/clients/:id', function(req, res) {
  knex('clients')
    .where('id', req.params.id)
    .first()
    .then((clients) => {
      if (!clients) {
        return next();
      }

      res.send(clients);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/clients', function(req,res) {
  knex('clients')
        .insert({
            clients_name: req.body.clients_name
        }, '*')
        .then((clients) => {
            res.send(clients[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/clients/:id', function(req,res) {
  knex('clients')
    .where('id', req.params.id)
    .first()
    .then((clients) => {
      if (!clients) {
        return next();
      }
      return knex('clients')
        .update({
          clients_name: req.body.clients_name
        }, '*')
        .where('id', req.params.id);
      })
      .then((clients) => {
        res.send(clients[0]);
      })
      .catch((err) => {
        next(err);
      });
    });

    router.delete('/clients/:id', (req, res, next) => {
       let client;

       knex('clients')
           .where('id', req.params.id)
           .first()
           .then((row) => {
               if (!row) {
                   return next();
               }

               target = row;

               return knex('clients')
                   .del()
                   .where('id', req.params.id);
           })
           .then(() => {
               delete client.id;
               res.send(client);
           })
           .catch((err) => {
               next(err);
           });
    });

module.exports = router;
