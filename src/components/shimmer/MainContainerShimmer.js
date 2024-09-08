import React from 'react'
import "./MainContainerShimmer.css";
import VideoBackgroundShimmer from './VideoBackgroundShimmer';
import VideoTitleShimmer from './VideoTitleShimmer';

const MainContainerShimmer = () => {
  return (
    <div className="pt-[15%] bg-black md:pt-0">
        <VideoBackgroundShimmer />
        <VideoTitleShimmer />
    </div>
  )
}

export default MainContainerShimmer
