import "./ToDo.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// import data from "./data.json";

// 1. import existing data done
// 2. loop done
// 3. build template/ styles
// 4. build the input to add done
// 5. some functioning to toggle done

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
  - Call `uuid()` to generate IDs for your items.
*/
const ToDo = (props) => {
  const { data } = props;
  const [newTodo, setNewTodo] = useState("");
  const [list, setList] = useState(data);
  function toggleChecked(todo) {
    // todo.completed = !todo.completed;
    // iterate over the list
    // find thar uuid
    // change it
    // make new list
    // set newlist

    const thing = list.map((item) => {
      if (item.id === todo.id) {
        item.completed = !item.completed;
      }

      return item;
    });

    setList(thing);
  }
  function todoChangeHandler(e) {
    setNewTodo(e.target.value);
  }

  function handleAdd() {
    let newList = [
      ...list,
      {
        id: uuid(),
        completed: false,
        text: newTodo
      }
    ];

    setList(newList);
    setNewTodo("");
  }

  return (
    <>
      <input type="text" onChange={todoChangeHandler} value={newTodo} />
      <button onClick={handleAdd}> Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => toggleChecked(todo)}
              checked={todo.completed}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
