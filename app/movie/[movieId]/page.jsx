import React, { Suspense } from 'react';
import Movie from './Movie';
import { getMovieDetails } from '../../../utils/requests';

const MoviePage = async ({ params: { movieId } }) => {
  const movie = await getMovieDetails(movieId);

  return (
    <Suspense fallback={<div>Loading movie...</div>}>
      <Movie movie={movie} />
    </Suspense>
  );
};

export default MoviePage;
