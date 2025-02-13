// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model');

router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

router.post("/celebrities/create", (req, res, next) => {
    Celebrity.create(req.body)
    .then(celebrity => {
        res.redirect('/celebrities')
      })
      .catch(err => res.render("celebrities/new-celebrity"), { err })
    
});

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then(celebrity => 
    res.render("celebrities/new-celebrity"));
  });