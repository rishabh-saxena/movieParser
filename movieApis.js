var axios = require('axios'); 
const Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://rishabsaxena:@localhost:5432/moviedatabase');
var getparaMount = () => axios.get(' https://movie-api-lyalzcwvbg.now.sh/paramount');
var getDreamWorks = () => axios.get(' https://movie-api-lyalzcwvbg.now.sh/dreamWorks');
var getActors = () => axios.get('https://movie-api-lyalzcwvbg.now.sh/actors');
getparaMount()
  .then(function (response) {
      const studio='paramount';
      addMovie(response.data,studio);
  })
  .catch(function (error) {
      console.log(error);
  });
getDreamWorks()
  .then(function (response) {
      const studio='DreamWorks';
      addMovie(response.data,studio);
  })
  .catch(function (error) {
      console.log(error);
  });
getActors()
  .then(function (response) {
      addActors(response.data,studio);
  })
  .catch(function (error) {
      console.log(error);
  });

function addMovie(movieData,studio)
  {
    movieData.forEach(function (element)
    {
        const movieName = element.movieName;
        const studio = studio;
        const releaseDate = element.releaseDate;
        const query = `insert into tasks moviename,releasedate,studio values ${movieName},${releaseDate},${studio}`;
        const readTasks = sequelize.query(query);
        return readTasks;
    });
}
function addActors(actorData)
  {
    actorData.forEach(function (element)
    {   const movieName = element.movieName;
        const studio = studio;
        const releaseDate = element.releaseDate;
        const query = `insert into tasks moviename,releasedate,studio values ${movieName},${releaseDate},${studio}`;
        const readTasks = sequelize.query(query);
        return readTasks;
    });
}



    // getDreamWorks()
    // .then(function (response) {
    //   console.log(response.data );
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // getActors()
    // .then(function (response) {
    //   console.log(response.data );
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });