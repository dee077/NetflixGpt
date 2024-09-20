import { AUTH_DOMAIN } from '../utils/constants';
import { showToast } from '../utils/toastConfig';
import { adduser } from '../components/store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useAuth = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateSignupData = (signupData) => {
    const { fullName, email, password } = signupData;

    if (!fullName || !email || !password ) {
      showToast("All fields are required","error")
      return null;
    }

    return { name: fullName, email: email, password: password};
  };

  const submitSignup = async (signupData) => {
    const validatedSignupData = validateSignupData(signupData);
    if(!validatedSignupData) return 
    try {
      const response = await fetch(AUTH_DOMAIN + "/api/auth/signup", {
          method: "POST",
          mode: 'no-cors', 
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedSignupData),
      });

      const data = await response.json();
      // console.log(data)
      if (response.ok) {
          const { jwtToken, user } = data;
          sessionStorage.setItem("userData", (user));
          sessionStorage.setItem("jwtToken", jwtToken);
          showToast("Signup successful!");
          dispatch(adduser(user))
          navigate("/browse")
      } else {
          showToast(data?.message, "error");
      }
    } catch (error) {
        showToast("An error occurred during signup", "error");
      }
  };

  const validateLoginData = (loginData) => {
    const {email, password} = loginData;

    if (!email || !password) {
      showToast("All fields are required", "error");
      return false;
    }
    return true
  };

  const submitLogin = async (loginData) => {
    if(!validateLoginData(loginData)) return
    try {
      const response = await fetch(AUTH_DOMAIN + "/api/auth/login", {
        method: "POST",
        mode: 'no-cors', 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      // console.log(data)
      if (response.ok) {
        const { jwtToken, user, open_ai_key, the_movie_db_bearer_token } = data;
        sessionStorage.setItem("userData", JSON.stringify(user));
        sessionStorage.setItem("jwtToken", jwtToken);
        sessionStorage.setItem("the_movie_db_bearer_token", JSON.stringify(the_movie_db_bearer_token));
        sessionStorage.setItem("open_ai_key", open_ai_key);
        showToast("Login successful!");
        dispatch(adduser(user))
        navigate("/browse")
      } else {
        showToast(data?.message, "error");
      }
    } catch (error) {
      showToast("An error occurred during login", "error");
    }
  };

  return { submitSignup, submitLogin };
};

export default useAuth;
