import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo.js";

const App = () => (
  <main>
    <ToDo />
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));
