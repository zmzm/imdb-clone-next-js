import React, { Suspense } from 'react';
import { getTopRatedMovies, getTrandingMovies } from '../utils/requests';
import Carousel from './Carousel';
import Movies from './Movies';

const Home = async () => {
  const { results: trandingMovies } = await getTrandingMovies();
  const topRatedMovies = getTopRatedMovies();

  return (
    <>
      <Carousel data={trandingMovies} />
      <Suspense fallback={<div>Loading top rated movies...</div>}>
        <Movies dataPromise={topRatedMovies} />
      </Suspense>
    </>
  );
};

export default Home;
