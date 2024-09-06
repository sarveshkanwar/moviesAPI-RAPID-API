

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3205a14b9cmsh5b199fa367bac03p136b8fjsn5aa1b65a4731',
    'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
  },
};


fetch("https://advanced-movie-search.p.rapidapi.com/search/movie?query=kong&page=1", options)
  .then((response) => {
    // Check the response object for status codes
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
  })
  .catch((err) => {
    console.log(err); // Log any error encountered during the fetch call
  });
