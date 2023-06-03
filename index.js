// Replace API_ENDPOINT with the URL of the API endpoint you want to fetch data from
var moviename = document.getElementById("movieName");

function search(){
    const API_ENDPOINT = `http://www.omdbapi.com/?t=${moviename.value}&apikey=f09c5251`;
    console.log(moviename.value)
    fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Do something with the data
      document.getElementById("title").innerHTML =   data.Title;
      document.getElementById("year").innerHTML = "Year : " + data.Year;
      document.getElementById("cast").innerHTML = "Cast : " + data.Actors;
      document.getElementById("director").innerHTML = "Director : " + data.Director;
    //   document.getElementById("genere").innerHTML = "Genere : " + data.Genere;
      document.getElementById("language").innerHTML = "Language : " + data.Language;
    document.getElementById("plot").innerHTML = "Story : " + data.Plot;
    document.getElementById("rating").innerHTML = "IMDB rating : " + data.imdbRating;
    document.getElementById("image").src = data.Poster;
})
    .catch(error => {
      console.error(error); // Handle any errors
    });

    
   

}

