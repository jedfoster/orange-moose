import "./ToDo.css";
import React, { useState } from "react";
import Item from "./Item";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = ({ data }) => {
  const [items, setItems] = useState(data);
  const [inputItem, setInputItem] = useState("");

  const handleOnChange = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleTextOnChange = (event) => {
    setInputItem(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newItems = [...items];
    newItems.push({
      completed: false,
      text: inputItem
    });
    setItems(newItems);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="new item"
          onChange={handleTextOnChange}
        />
        <button>Add</button>
      </form>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          handleOnChange={handleOnChange}
        />
      ))}
    </>
  );
};

export default ToDo;
