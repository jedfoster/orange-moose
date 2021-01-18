import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const [todoItems, setTodoItems] = useState(props.data);

  return (
    <div>
      <input placeholder="Add Item"></input>
      <button className="btn">Add</button>
      <ul>
        {todoItems.map((item, index) => (
          <li className={item.completed ? "completed" : ""}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default ToDo;

//list that render to the UI
//traverse through the list using map
//display the text to the UI

// props.data.map((item, index) => {})

//array1.map(x => x * 2)

// <li class="completed">Apples</li>

// https://codesandbox.io/s/sad-fire-kk3ln
