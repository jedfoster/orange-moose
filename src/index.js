import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo.js";
import { data } from "./data.json";

const App = () => (
  <main>
    <ToDo data={data} />
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));
