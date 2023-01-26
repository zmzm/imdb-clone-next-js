import React from 'react';
import { getTopRatedMovies, getTrandingMovies } from '../utils/requests';
import Carousel from './Carousel';
import Movies from './Movies';

const Home = async () => {
  const trandingMovies = await getTrandingMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <>
      <Carousel data={trandingMovies.results} />
      <Movies data={topRatedMovies.results} />
    </>
  );
};

export default Home;
