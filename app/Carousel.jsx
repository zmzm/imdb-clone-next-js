'use client';

import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  return (
    <div>
      <ResponsiveCarousel
        className="h-[650px]"
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler) => (
          <button
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline z-10"
            type="button"
            onClick={onClickHandler}
          >
            <div className="rounded-lg bg-gray-50/70 p-1 ml-3">
              <ChevronLeftIcon className="h-9" />
            </div>
          </button>
        )}
        renderArrowNext={(onClickHandler) => (
          <button
            className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            onClick={onClickHandler}
          >
            <div className="rounded-lg bg-gray-50/70 p-1 mr-3">
              <ChevronRightIcon className="h-9" />
            </div>
          </button>
        )}
      >
        {data.map((item, index) => (
          <div
            key={`slide${index + 1}`}
            className="relative h-[650px]"
            style={{
              backgroundImage: `url(${BASE_URL}${item.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className="absolute top-[20%] w-[30%] transform-center rounded-lg bg-gray-50/70 p-3">
              <p className="font-bold text-3xl">{item.name || item.title}</p>
              <p className="text-lg">{item.overview}</p>
            </div>
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
