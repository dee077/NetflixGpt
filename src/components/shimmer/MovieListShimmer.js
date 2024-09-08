import React from "react";
import './MovieListShimmer.css'

const MovieListShimmer = ({ title }) => {
  return (
    <div className="py-2 p-4 bg-black">
      <h1 className="text-md md:text-2xl font-semibold p-2 md:p-2 text-white">
        {'Now Playing Movies'}
      </h1>
      <div className="flex p-2 flex-row overflow-x-scroll overflow-hidden scrollbar bg-black">
        <div className="flex bg-black">
          {Array(10) // Show 10 shimmer placeholders
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-40 md:w-72 pr-3 md:pr-6 movie-card transition-transform"
              >
                <div className="shimmer-card rounded-md"></div>
                <div className="shimmer-text mt-2 rounded-md"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListShimmer;
