export const getTrandingMovies = async () => {
  const res = await fetch(`
  https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&language=en-US}
  `);

  if (!res.ok) {
    throw new Error('Failed to fetch tranding movies');
  }

  return res.json();
};

export const getTopRatedMovies = async () => {
  const res = await fetch(`
  https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US}
  `);

  if (!res.ok) {
    throw new Error('Failed to fetch top rated movies');
  }

  return res.json();
};
