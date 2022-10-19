export const fetchAllMovies = async () => {
  const response = await fetch(
    'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
  );
  if (response.status >= 500) {
    throw new Error('Something went wrong. Try again later.');
  }
  if (!response.ok) {
    console.log(response.status);
    throw new Error('Sorry, an error occured');
  }
  const data = await response.json();
  return data.movies;
};

export const fetchMovie = async (movieID) => {
 return await fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
  ); 
};
