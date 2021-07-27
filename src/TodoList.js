import React from "react";

const TodoList = ({ handleChecked, list }) => {
  return list.map(({ text, completed }, idx) => (
    <li style={{ display: "flex" }} key={text}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChecked(idx)}
      />
      <span className={completed ? "completed-class" : ""}>{text}</span>
    </li>
  ));
};

export default TodoList;
