import authReducer from "./authReducer";
import { combineReducers } from "redux";
import issueReducer from "./issueReducer";
import categoryReducer from "./categoryReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  issue: issueReducer,
  category: categoryReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
