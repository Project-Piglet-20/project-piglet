const initState = {
  issues: [],
};

const issueReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ISSUE":
      console.log("Issue added", action.issue);
      return state;
    case "CREATE_ISSUE_ERROR":
      console.log("Issue add error", action.err);
      return state;
    default:
      return state;
  }
};

export default issueReducer;
