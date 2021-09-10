import "./ToDo.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
  - Call `uuid()` to generate IDs for your items.
*/

const ToDo = ({ data }) => {
  const [todoList, setTodoList] = useState(data);

  function AddItem() {
    var newItem = {};
    newItem.id = uuid();
    newItem.completed = false;
    newItem.text = document.getElementById("newItem").value;
    setTodoList([...todoList, newItem]);
  }

  function ItemDoneToggle(item) {
    var newList = todoList.map((innerItem) => {
      if (innerItem.id === item.id) innerItem.completed = !innerItem.completed;
      return innerItem;
    });
    setTodoList(newList);
  }

  return (
    <section>
      <input id="newItem" />
      <button id="addNew" onClick={AddItem}>
        Add
      </button>
      <ul>
        {todoList.map((item) => (
          <li>
            <input
              id={item.id}
              type="checkbox"
              checked={item.completed}
              onClick={(click) => ItemDoneToggle(item)}
            />
            <label id="lblCheckbox">{item.text}</label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToDo;
