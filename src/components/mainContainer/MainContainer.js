import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import MainContainerShimmer from "../shimmer/MainContainerShimmer";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) 
    return <MainContainerShimmer />;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <div className="pt-[15%] bg-black md:pt-0">
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
