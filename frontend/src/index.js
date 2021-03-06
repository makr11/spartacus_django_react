import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./store/reducers";
// redux persist
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// react router
import { BrowserRouter } from "react-router-dom";
// app main components
import App from "./layout/App";
// styles css
import "./assets/css/main.css";

export const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

const persistor = persistStore(store);

const p = () => {
  persistor.purge();
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App persistor={p} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
