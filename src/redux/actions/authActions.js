import Cookies from "js-cookie";

import * as api from "../../server/index";

export const SignUp = (userData) => async (dispatch) => {
  dispatch({ type: "SIGNUP_PENDING" });
  try {
    const { data } = await api.registerUser(userData);
    dispatch({ type: "SIGNUP_SUCCESS", payload: data?.result });
  } catch (error) {
    console.log("error in catch of sign up action", error);
    dispatch({ type: "SIGNUP_ERROR", payload: error?.response });
  }
};


export const Login = (userData, navigate) => async (dispatch) => {
  dispatch({ type: "LOGIN_PENDING" });
  try {
    const { data } = await api.loginUser(userData);
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    localStorage.setItem('userData', JSON.stringify(data?.result))
    navigate('/musics')
  } catch (error) {
    console.log("error in catch of login action", error);
    dispatch({ type: "LOGIN_ERROR", payload: error?.response });
  }
};

