const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_FAILED":
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      return state;
    case "SIGNOUT_FAILED":
      return { ...state, authError: action.payload };
      return state;
    case "SIGNUP_SUCCESS":
      return { ...state, authError: null };
    case "SIGNUP_FAILED":
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};

export default authReducer;
