import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  Your `ToDo` component receives initial data in a prop, `data`. 
  See `src/data.json` for the structure of that prop.
*/

const ToDoItem = ({ text, completed, index, handleChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        value="checked"
        checked={completed}
        onChange={(e) => handleChange(index)}
      />
      {text}
    </li>
  );
};

const NewToDoForm = ({ handleSubmit }) => {
  const [newItem, setNewItem] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(newItem);
        setNewItem("");
      }}
    >
      <input
        type="text"
        placeholder="new item"
        value={newItem}
        onChange={(e) => setNewItem(e.currentTarget.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

const ToDo = ({ data }) => {
  const [todoItems, setTodoItems] = useState(data);

  const toggleCompleted = (index) => {
    const items = [...todoItems];

    items[index].completed = !items[index].completed;

    setTodoItems(items);
  };

  const addItem = (text) => {
    const items = [...todoItems];

    items.push({ text, completed: false });

    setTodoItems(items);
  };

  return (
    <div>
      <NewToDoForm handleSubmit={addItem} />

      <ul>
        {todoItems.map(({ text, completed }, index) => (
          <ToDoItem
            text={text}
            completed={completed}
            index={index}
            key={index}
            handleChange={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
