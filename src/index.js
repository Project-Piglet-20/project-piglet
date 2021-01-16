import "./index.css";
import App from "./App";
import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import fbconfig from "./config/fbconfig";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      })
    ),
    reduxFirestore(fbconfig),
    reactReduxFirebase(fbconfig, {
      useFirestoreForProfile: true,
      userProfile: "authority",
      attachAuthIsReady: true,
    })
  )
);

store.firebaseAuthIsReady.then(
  ReactDOM.render(
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
