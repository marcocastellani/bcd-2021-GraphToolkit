import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

// initialize the auth provider globally
Providers.globalProvider = new Msal2Provider({
  clientId: "5b7415c3-bdf8-48bd-94ad-19ef8debf02a",
  scopes: ["calendars.read", "user.read", "openid", "profile", "people.read", "user.readbasic.all"],
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
