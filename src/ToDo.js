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

const ToDo = (prop) => {
  console.log("prop", prop);
  const [items, setItems] = useState([...prop.data]);
  const [userInput, setUserInput] = useState("");
  console.log("items:", items);
  console.log("userInput:", userInput);
  const updateListItem = (item) => {
    const newList = items.map((x) => {
      if (x.id === item.id) {
        x.completed = !x.completed;
      }
      return x;
    });

    setItems(newList);
  };
  const displayItems = items.map((eachItem, index) => {
    return (
      <div key={index}>
        {eachItem.text}
        <input
          onChange={() => {
            updateListItem(eachItem);
          }}
          type="checkbox"
          checked={eachItem.completed}
        ></input>
      </div>
    );
  });
  return (
    <div>
      Enter Items:{" "}
      <input
        className="userInput"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></input>
      <button
        className="submit"
        onClick={() => {
          setItems([
            ...items,
            { id: uuid(), completed: false, text: userInput }
          ]);
        }}
      >
        SUBMIT
      </button>
      {displayItems}
    </div>
  );
};

export default ToDo;
