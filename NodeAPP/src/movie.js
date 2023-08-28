const { Router } = require('express');
const movies = require('../lib/movie.json');
// const { validationMiddleware } = require('../lib/validationMiddleware');

const router = Router()

// router.get('/movies', validationMiddleware(validation.get), (req, res, next) => {
//     res.send({ movies })
// });

router.get('/movies', (req, res, next) => {
    res.send({ movies })
});

router.post('/add-movie', (res, req, next) => { });

module.exports = router;