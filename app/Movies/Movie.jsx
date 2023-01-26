import React from 'react';

const Movie = ({ posterPath, title, id, date }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  return (
    <div
      key={id}
      className="w-48 mb-10 shadow-xl rounded-md border border-solid"
    >
      <a href={id} className="group">
        <img
          className="group-hover:cursor-pointer w-full h-60 rounded-t-md"
          src={`${BASE_URL}${posterPath}`}
          alt={title}
        />
        <div className="px-3 pb-3 pt-6">
          <p className="group-hover:text-blue-500 font-bold group-hover:cursor-pointer underline">
            {title}
          </p>
          <p className="text-sm text-gray-500 group-hover:cursor-pointer w-40 truncate">
            {new Date(date).toDateString()}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Movie;
