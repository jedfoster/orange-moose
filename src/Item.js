import React from "react";
import "./Item.css";

const Item = ({ item, index, handleOnChange }) => {
  return (
    <div className={item.completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleOnChange(index)}
      />
      <label for="">{item.text}</label>
    </div>
  );
};

export default Item;
