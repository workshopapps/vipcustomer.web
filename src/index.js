import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Appcontext from "./store/contexts/AppContext";
import Authcontext from "./store/contexts/AuthContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Appcontext>
        <Authcontext>
          <App />
        </Authcontext>
      </Appcontext>
    </BrowserRouter>
  </React.StrictMode>
);
