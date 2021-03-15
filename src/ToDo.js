import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const [newItem, setNewItem] = useState("");
  const [list, addList] = useState(props.data);

  const onChangeHandler = (event) => {
    setNewItem(event.target.value);
  };

  const onClick = (event) => {
    let newList = [...list];
    newList.push({ text: newItem, completed: false });
    addList(newList);
    event.preventDefault();
  };

  return (
    <form>
      <input
        className="prettyCorners"
        id="newItem"
        type="text"
        placeholder="new item"
        onChange={onChangeHandler}
      ></input>
      <button className="buttonClass" onClick={onClick}>
        Add
      </button>
      {list.map((item) => {
        return (
          <div>
            <label>
              <input
                type="radio"
                checked={item.completed}
                disabled={item.completed}
              />
              <span className={item.completed ? "itemCompleted" : ""}>
                {item.text}
              </span>
            </label>
          </div>
        );
      })}
    </form>
  );
};

export default ToDo;
