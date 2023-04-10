const initialState = {
  signUpData: null,
  signUpStatus: "idle",

  loginData: null,
  loginStatus: "idle",

  singUpError: null,
  loginError: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_PENDING":
      return { signUpStatus: "pending" };

    case "SIGNUP_SUCCESS":
      return { signUpStatus: "success", signUpData: action.payload };

    case "SIGNUP_ERROR":
      return { signUpStatus: "error", singUpError: action.payload };

    case "LOGIN_PENDING":
      return { loginStatus: "pending" };

    case "LOGIN_SUCCESS":
      return { loginStatus: "success", loginData: action.payload };

    case "LOGIN_ERROR":
      return { loginStatus: "error", loginError: action.payload };

    default:
      return state;
  }
};
