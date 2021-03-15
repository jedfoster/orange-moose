import "./ToDo.css";
import React, { useState, useCallback } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const [itemName, setItemName] = useState("");
  const [itemData, setItemData] = useState(props.data);

  const handleAddClick = useCallback(() => {
    if (itemName === "") return;
    setItemData([
      ...itemData,
      {
        completed: false,
        text: itemName
      }
    ]);
  }, [itemName]);

  const handleItemNameChanged = useCallback((e) => {
    setItemName(e.target.value);
  }, []);

  return (
    <React.Fragment>
      <input id="name-input" type="text" onChange={handleItemNameChanged} />
      <input
        id="add-button"
        type="button"
        value="Add"
        onClick={handleAddClick}
      />
      <ul>
        {itemData.map((item, index) => {
          return (
            <li className={`${item.completed ? "item-complete" : ""}`}>
              <input type="checkbox" id={index} checked={item.completed} />
              <label htmlFor={index}>{item.text}</label>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ToDo;
