export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    let itr = 0;
    var password = "";
    for (itr = 0; itr < credentials.password.length; itr++) {
      password = password.concat(
        String.fromCharCode(credentials.password.charCodeAt(itr) + 1)
      );
    }
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
