'use client';

import React from 'react';

const Movie = ({ movie }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const filmDate = new Date(movie.release_date);

  return (
    <div
      className="w-screen h-screen"
      style={{
        background: 'rgba(0, 0, 0, 0.65)',
      }}
    >
      <div
        className="w-full movie-detail"
        style={{
          background: `url(${BASE_URL}${movie.backdrop_path})`,
        }}
      >
        <div
          className="h-full"
          style={{
            background: 'rgba(0, 0, 0, 0.65)',
            boxShadow: '0px 35px 50px 11px rgba(0, 0, 0, 0.65)',
          }}
        >
          <div className="px-40 pb-8 pt-36 flex">
            <img
              alt={movie.name || movie.title}
              src={`${BASE_URL}${movie.poster_path}`}
              className="w-[300px] h-[450px] rounded-md"
            />
            <div className="flex">
              <div className="pl-16 flex content-center flex-wrap">
                <div className="flex flex-col mb-6">
                  <h2 className="text-white text-4xl font-bold">
                    {movie.name || movie.title} ({filmDate.getFullYear()})
                  </h2>
                  <div className="flex">
                    <p className="text-white mr-5 font-extralight">
                      {filmDate.toDateString()}
                    </p>
                    <p className="text-white font-extralight">
                      {movie.genres.map(({ name }) => name).join(', ')}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="italic text-white opacity-70">
                    {movie.tagline}
                  </h3>
                  <h3 className=" text-white mt-3 mb-2 text-lg">Overview</h3>
                  <p className="text-white font-extralight">{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
