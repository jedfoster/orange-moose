import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const { data } = props;
  const [textValue, setTextValue] = useState("");
  const [todos, setTodos] = useState(data);

  const handleTextInput = (evt) => {
    setTextValue(evt.target.value);
  };

  const handleAddItem = () => {
    setTodos([
      ...data,
      {
        text: textValue,
        completed: false
      }
    ]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="new item"
        onChange={handleTextInput}
        value={textValue}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <input type="checkbox" checked={todo.completed} />
              {todo.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDo;
