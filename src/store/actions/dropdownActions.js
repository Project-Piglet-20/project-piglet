export const addDropdown = (dropdown) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("dropdownList")
      .add({
        ...dropdown,
      })
      .then(() => {
        dispatch({
          type: "ADD_DROPDOWN",
          dropdown,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_DROPDOWN_ERROR",
          err,
        });
      });
  };
};
