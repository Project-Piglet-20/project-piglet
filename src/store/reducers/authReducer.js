const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login error");
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout Success");
      return state;
    case "ADD_AUTHORITY_SUCCESS":
      console.log("add authority Success");
      return {
        ...state,
        authError: null,
      };
    case "ADD_AUTHORITY_ERROR":
      console.log("add authority error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
