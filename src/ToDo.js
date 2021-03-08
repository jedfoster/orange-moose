import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  return props.data.map((d) => {
    return (
      <div>
        <input />
        <span>{d.text}</span>
      </div>
    );
  });
};

export default ToDo;
