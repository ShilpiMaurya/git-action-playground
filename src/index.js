import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
const App = () => {
  return (
    <>
      <h1>Git-actions Playground</h1>
      <h2>let`s learn something new</h2>
      <h3>CI and CD</h3>
      <h3>Successfully build and deploy</h3>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
