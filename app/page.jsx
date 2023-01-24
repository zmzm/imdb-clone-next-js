import React from 'react';
import Carousel from './Carousel';

async function getData() {
  const res = await fetch(`
  https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&language=en-US}
  `);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();

  return <Carousel data={data.results} />;
};

export default Home;
