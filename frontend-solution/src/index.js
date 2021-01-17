import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo.js";
import data from "./data.json";

const App = () => (
  <main>
    <ToDo data={data} />

    <footer>
      <p>
        <b>Notes:</b> Your <code>ToDo</code> component receives initial data in
        a prop, <code>data</code>. See <code>src/data.json</code> for the
        structure of that prop.
      </p>
    </footer>
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));
