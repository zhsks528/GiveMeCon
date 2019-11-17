import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import logger from "redux-logger";

// const history = createHistory();

import reducer from "store/reducers";

import App from "components/App";

import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

// Redux DevTools Settings
const middlewares = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
