import React from "react";
import "./MainContainerShimmer.css";

const VideoTitleShimmer = () => {
  return (
    <div className="pt-[30%] md:pt-[19%] absolute px-6 md:px-20 w-full aspect-video bg-gradient-to-br from-black text-white">
      <div className="shimmer-title h-16 rounded-md"></div>
      <div className="shimmer-text rounded-md"></div>
      <div className="flex py-2 mt-4 my-2">
        <div className="w-32 h-10 bg-gray-500 shimmer-bg rounded-md"></div>
        <div className="w-32 h-10 bg-gray-500 shimmer-bg rounded-md ml-6"></div>
      </div>
    </div>
  );
};

export default VideoTitleShimmer;
