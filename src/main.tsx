import React from "react";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
