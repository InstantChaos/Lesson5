let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let game = require('../models/games');

/* GET games list page. */
router.get('/', (req, res, next) => {
  // find all games in the games collection
  game.find((err, games) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('games/index', {
        title: 'Games',
        games: games
      });
    }

  });
  
});


module.exports = router;