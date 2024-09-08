import { useDispatch, useSelector } from "react-redux";
import { TopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS, DOMAIN } from "../../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    // Memoization to avoid unnecessary API calls
    const topRatedMovies = useSelector(store => store.movies.TopRatedMovies);
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await
            fetch(DOMAIN + '/top_rated',
                API_OPTIONS
            );
        const json = await data.json();
        dispatch(TopRatedMovies(json.results));
    };
    useEffect(() => {
        if (!topRatedMovies) getTopRatedMovies();
    }, [])
};

export default useTopRatedMovies;