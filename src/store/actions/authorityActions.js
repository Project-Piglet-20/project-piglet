export const addAuthority = (authority) => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(authority.email, authority.password)
      .then((res) => {
        return firestore.collection("authority").doc(res.user.uid).set({
          locality: authority.locality,
          name: authority.name,
          phone: authority.phone,
          email: authority.email,
          password: authority.password,
        });
      })
      .then(() => {
        dispatch({
          type: "ADD_AUTHORITY_SUCCESS",
          authority,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_AUTHORITY_ERROR",
          err,
        });
      });
  };
};
