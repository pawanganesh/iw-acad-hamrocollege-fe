import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
// import App from "./components/App";
// import "semantic-ui-css/semantic.min.css";
// import { Provider } from "react-redux";
// import store from "../src/store";

// import { Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// // Alert Options
// const alertOptions = {
//   timeout: 7000,
//   position: "top right",
// };

// ReactDOM.render(
//   <Provider store={store}>
//     <AlertProvider template={AlertTemplate} {...alertOptions}>
//       <App />
//     </AlertProvider>
//   </Provider>,
//   document.getElementById("root")
// );