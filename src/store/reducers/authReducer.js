const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_FAILED":
      console.log("login failed");

      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("sign out successfuly");
      return state;
    case "SIGNOUT_FAILED":
      console.log("sign out failed");
      return { ...state, authError: action.payload };
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return { ...state, authError: null };
    case "SIGNUP_FAILED":
      console.log("signup failed");
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};

export default authReducer;
