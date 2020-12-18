export const addIssue = (issue) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("issues")
      .add({
        ...issue,
        DOR: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_ISSUE",
          issue,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_ISSUE_ERROR",
          err,
        });
      });
  };
};
