// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");



router.get("/create", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("movies/new-movie", { celebrities });
    })
    .catch((error) => {
      console.error(error);
    });
});

router.get("/", (req, res, next) => {
  Movie.find().populate('cast')
  .then((movies) => {
    res.render('movies/movies', { movies });
    console.log("movies rendered")
  })
  .catch((error) => {
    console.error(error);
  });
});


router.get("/", (req, res, next) => {
  Movie.find()
  .then((movies) => {
    res.render('movies/movies', { movies });
    console.log("movies rendered")
  })
  .catch((error) => {
    console.error(error);
  });

  // Celebrity.find()
  // .then((celebrities) => {
  //   res.render('celebrities/celebrities', { celebrities });
  //   console.error("celebrities rendered")
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
});

router.get("/create", (req, res, next) => {
    res.render("movies/new-movie");
    console.log("movies page")
  });


  router.post("/create", (req, res, next) => {
   
    Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast
    })
    .then((createdMovie) => {
      console.log("THIS IS THE MOVIE I CREATED", createdMovie)
      res.redirect('/')
    })
    .catch((err) => {
        res.render("movies/new-movie")
        console.log(err)
    })

  //   if (!req.body.title|| !req.body.genre ||!req.body.plot) {
  //     res.render('movies/new-movie', {message : "All fields are required"})
  //     return;
  // } 


  });



module.exports = router;