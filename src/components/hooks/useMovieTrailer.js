import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, DOMAIN } from "../../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // Memoization to avoid unnecessary API calls
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    // fetching the trailer video and updating the store with trailerVideo data
    const getMovieVideo = async () => {

        const data = await fetch(
            DOMAIN + '/movie?movieId='+ movieId,
            API_OPTIONS)
        const json = await data.json();
        // console.log(json)
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        if (!trailerVideo) getMovieVideo();
    }, [])
}

export default useMovieTrailer;