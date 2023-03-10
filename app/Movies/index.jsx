import React from 'react';
import MovieCard from './MovieCard';

const Movies = async ({ dataPromise }) => {
  const { results: data } = await dataPromise;

  const renderMovies = () =>
    data.map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        date={movie.release_date}
        posterPath={movie.poster_path}
      />
    ));

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(192px,_1fr))] xl:grid-cols-7 pl-10 mt-10">
      {renderMovies()}
    </div>
  );
};

export default Movies;
