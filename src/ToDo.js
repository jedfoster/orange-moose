import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const [data, setData] = useState(props.data);
  const [nextTodo, setNextTodo] = useState("");

  const updateInput = (e) => {
    const value = e.target.value;
    setNextTodo(value);
  };
  const addTodoItem = () => {
    setData([...data, { completed: false, text: nextTodo }]);
  };
  const handleCheck = (e) => {
    const index = e.target.value;
    const newData = [...data];
    newData[index].completed = !newData[index].completed;
    setData(newData);
  };

  return (
    <div>
      <div className="top-section">
        <input
          className="todo-input"
          onChange={updateInput}
          placeholder="new item"
          value={nextTodo}
        />
        <button className="add-button" onClick={addTodoItem}>
          Add
        </button>
      </div>
      <ul className="list">
        {data.map((item, index) => (
          <li>
            <input
              onChange={handleCheck}
              type="checkbox"
              checked={item.completed}
              value={index}
            />
            <span className={item.completed ? "completed" : "incomplete"}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDo;
