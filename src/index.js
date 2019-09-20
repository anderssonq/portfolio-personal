import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

addLocaleData(es, en);

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
