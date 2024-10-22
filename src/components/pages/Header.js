import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../store/userSlice";
import {
  LOGO_URL,
  SUPPORTED_LANGUAGES,
  USER_ICON,
} from "../../utils/constants";
import { toggleGptSearchview } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";
import ScrollToTop from "./ScrollToTop";

const Header = () => {
  const dispatch = useDispatch();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const user = useSelector((state) => state?.user);
  const userName = user?.name;
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  // using fire base API to store all the values into store
  useEffect(() => {
      if (!user) {
        navigate("/");
      }
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("jwtToken");
    dispatch(removeUser())
    navigate("/")
  }

  const handleGptSearchClick = () => {
    // toggel gpt search
    dispatch(toggleGptSearchview());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <>
      <ScrollToTop />
      <div className="absolute top-1 left-0 z-10 flex justify-between w-full md:px-10 mx-auto ">
        <div className="flex items-center">
          <img
            // onClick={navigate("/")}
            className="w-28 mx-3 py-2 md:w-52 md:mx-0 cursor-pointer"
            src={LOGO_URL}
            alt="logo"
          />
          {user && (
            <div className="gap-6 ml-4 text-white text-lg hidden md:flex cursor-pointer text-left">
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">TV Shows</p>
              <p className="cursor-pointer">Movies</p>
              <p className="cursor-pointer">Web series</p>
            </div>
          )}
        </div>
        {user && (
          <div className="flex p-2 m-2">
            {showGptSearch && (
              <select
                className="hidden md:inline-block p-2 m-2 mx-0 h-9 my-2 bg-gray-700 text-white rounded-lg hover:bg-slate-500 cursor-pointer"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-purple-600 px-2 md:px-4 mx-2 md:mx-3 md:my-2 h-7 md:h-9 text-white text-sm font-semibold rounded-md md:rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img
              className="w-7 md:w-8 h-7 md:h-9 cursor-pointer md:my-2 rounded-sm"
              src={USER_ICON}
              alt="usericon"
              onClick={toggleDropDown}
            />
            {isDropDownOpen && (
              <div className="absolute bg-gray-800 text-gray-300 mt-8 md:mt-12 w-32 md:w-60  right-3 md:right-10 p-2 rounded-lg shadow-lg ">
                <ul className="list-none p-0">
                  <li className="text-sm py-1 md:py-2 px-2 md:px-2 border-b border-gray-600">
                    Hello {userName}
                  </li>
                  <li className="text-sm py-1 md:py-2 px-2 border-b border-gray-600">
                    <button
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
