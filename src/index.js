import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { devToolsEnhancer } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();
const store = createStore(
  connectRouter(history)(rootReducer),
  devToolsEnhancer()
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
