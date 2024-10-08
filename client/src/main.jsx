import React , {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import authReducer from "./state/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { UnseenMessagesProvider } from "./context/UnseenMessagesContext.jsx";
import './i18n.js'

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <SocketContextProvider>
          <UnseenMessagesProvider>
            <React.Suspense fallback="loading...">
              <App />
            </React.Suspense>
          </UnseenMessagesProvider>
        </SocketContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
