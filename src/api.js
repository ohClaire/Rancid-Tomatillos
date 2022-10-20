export const fetchAllMovies = async () => {
  return await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
};

export const fetchMovie = async (movieID) => {
  return await fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
  );
};
