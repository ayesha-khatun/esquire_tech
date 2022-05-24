import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/default.css";
import "magnific-popup/dist/magnific-popup.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import 'font-awesome/css/font-awesome.min.css';
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
