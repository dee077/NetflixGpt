import React, { useRef, useState, useEffect } from "react";
import { BG_URL } from "../../utils/constants";
import Header from "../../components/pages/Header";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);

  const { submitSignup, submitLogin } = useAuth();

  const [fullName, setFullName] = useState("Test1");
  const [email, setEmail] = useState("test1@email.com");
  const [password, setPassword] = useState("Test1@12345");

  const navigate = useNavigate()
  const user = useSelector((state) => state?.user)

  const handleValidationBtn = () => {
    if (isSigninForm) {
      submitLogin({ email, password });
    } else {
      submitSignup({ fullName, email, password });
    }
  };

  const toggleSigninForm = () => {
    console.log(isSigninForm);
    setIsSignInForm(!isSigninForm);
  };

  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="brightness-50 fixed">
        <img
          className="h-screen object-cover md:w-screen md:h-screen"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-70 text-white w-full md:w-3/12 absolute p-8 md:p-12 my-40 md:mx-auto right-0 left-0"
      >
        <h1 className="text-xl font-semibold">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            value={fullName}
            type="name"
            placeholder="Name"
            className=" p-3 my-2 w-full rounded-md bg-gray-700"
            onChange={(e) => setFullName(e.target.value)}
          />
        )}
        <input
          value={email}
          type="email"
          placeholder="Email"
          className=" p-3 my-2 w-full rounded-md bg-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          className=" p-3 my-2 w-full rounded-md bg-gray-700"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-red-700 p-2 my-7 w-full rounded-md"
          onClick={handleValidationBtn}
        >
          {isSigninForm ? "Sign In" : "Sign up"}
        </button>
        <div className="flex">
          <p className="text-gray-400 text-sm">
            {isSigninForm && "New to Nextflix?"}
          </p>
          {isSigninForm ? (
            <p
              onClick={toggleSigninForm}
              className=" text-gray-200 text-sm cursor-pointer px-2 hover:underline"
            >
              Sign up now.
            </p>
          ) : (
            <div className="flex">
              <p className="text-gray-400 text-sm">
                {" "}
                Already have an account?{" "}
              </p>
              <p
                className="text-gray-200 text-sm cursor-pointer px-2 hover:underline"
                onClick={toggleSigninForm}
              >
                Sign In now.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
