import "./ToDo.css";
import React, { useState } from "react";

import TodoList from "./TodoList";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const { data } = props;
  const [input, setInput] = useState("");
  const [listItems, setListItems] = useState(data);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { text: input, completed: false };
    const newList = [newItem, ...listItems];
    setListItems(newList);
  };

  const handleChecked = (idx) => {
    const newList = [...listItems];
    newList[idx].completed = !newList[idx].completed;

    setListItems(newList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={input} />
        <button>Add</button>
      </form>

      <ul>
        <TodoList list={listItems} handleChecked={handleChecked} />
      </ul>
    </div>
  );
};

export default ToDo;
