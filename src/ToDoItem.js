import React from "react";

const ToDoItem = (props) => {
  return (
    <li className={props.completed ? "Completed" : ""}>
      <label>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => {
            props.handleCheck(props.idx);
          }}
        />
        {props.text}
      </label>
    </li>
  );
};

export default ToDoItem;
