import { useDispatch } from "react-redux";
import { UpcomingMovies } from "../store/movieSlice";
import { API_OPTIONS, DOMAIN } from "../../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      DOMAIN + '/upcoming',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(UpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
