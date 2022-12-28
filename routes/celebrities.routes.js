// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model")

router.get("/", (req, res, next) => {
    Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/celebrities', { celebrities });
      console.error("celebrities rendered")
    })
    .catch((error) => {
      console.error(error);
    });
  });

router.get("/create", (req, res, next) => {
    console.log("celebrities create page")
res.render("celebrities/new-celebrity");

});

router.post("/create",(req, res, next) => {
   
    Celebrity.create({

        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.phrase
    })
    .then((createdCelebrity) => {

        console.log("THIS IS THE CELEBRITY I CREATED", createdCelebrity)
        res.redirect('/')
   
    })
    .catch((err) => {
        res.render("celebrities/new-celebrity")
        console.log(err)
    })

    if (!req.body.name|| !req.body.occupation ||!req.body.phrase) {
        res.render('celebrities/new-celebrity', {message : "All fields are required"})
        return;
    } 
})
  
 
   


module.exports = router;
