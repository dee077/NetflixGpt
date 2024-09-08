import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, DOMAIN } from "../../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    // Memoization to avoid unnecessary API calls
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await
            fetch(DOMAIN + '/now_playing',
                API_OPTIONS
            );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(() => {
        if (!nowPlayingMovies) getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;