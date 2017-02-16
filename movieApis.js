const express = require('express');
const bodyParser = require('body-parser');
const {moviedb,getMovie} = require('./movieDbTasks');
const app = express();
app.use(bodyParser.json());
app.get('/movieFetch', function (req, res) {
    const readTasks = moviedb();
    readTasks.then(() => { res.send('success'); })
  .catch(() => { res.sendStatus(500); });
});
app.get('/movie/:movie',function(req,res)
{
    const moviename = req.param.movie;
    const movieData = getMovie(moviename);
    movieData.then(function()
{
        res.send('success');
    });
});
app.listen(3426);