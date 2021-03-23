import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const Item = ({ item: { text, completed: completedProp } }) => {
  const [completed, markCompleted] = useState(completedProp);

  const onMarkCompleted = () => {
    markCompleted(!completed);
  };

  return (
    <li key={text} className={completed ? "done" : ""}>
      <input type="checkbox" onChange={onMarkCompleted} checked={completed} />
      <span className={completed ? "done" : ""}>{text}</span>
    </li>
  );
};

const ToDo = (props) => {
  const [list, addItem] = useState(props.data);
  const [inputText, onTextChange] = useState("");

  const onAddClick = () => {
    const newItem = {
      text: inputText,
      completed: false
    };

    addItem([...list, newItem]);
  };

  // const onTextAdd = (e) => {
  //   onTextChange(e.target.value)
  // }

  const renderItems = (items) => {
    return items.map((item) => {
      return <Item item={item} />;
    });
  };
  return (
    <div>
      <input
        className="item-input"
        onChange={(e) => onTextChange(e.target.value)}
        value={inputText}
        placeholder="new item"
      />
      <button className="add-button" onClick={() => onAddClick()}>
        Add
      </button>
      <ul className="item">{renderItems(list)}</ul>
    </div>
  );
};

export default ToDo;
