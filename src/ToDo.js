import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = ({ data }) => {
  const [todoItems, setTodoItems] = useState(data);
  const [newItemText, setNewItemText] = useState("");

  const completeItem = (index) => {
    const items = [...todoItems];

    items[index].completed = !items[index].completed;

    setTodoItems(items);
  };

  const addNewItem = () => {
    const text = newItemText;
    const items = [...todoItems];

    items.push({
      completed: false,
      text
    });

    setTodoItems(items);
    setNewItemText("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button class="add-button" onClick={() => addNewItem()}>
          Add
        </button>
      </div>
      <ul>
        {todoItems.map((item, i) => (
          <li>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => completeItem(i)}
              className="todo-checkbox"
            />
            <span className={item.completed && "line-through-text"}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
