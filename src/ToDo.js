import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const { data } = props;
  const [list, setList] = useState(data);

  const handleSubmit = (e, text) => {
    e.preventDefault();
    let dataToAdd = {
      completed: false,
      text: text
    };

    setList([...list, dataToAdd]);
  };

  return (
    <>
      <AddItem handleSubmit={handleSubmit} />
      <ul>
        {list.map((todoItem, index) => {
          return <TodoItem item={todoItem} />;
        })}
      </ul>
    </>
  );
};

const TodoItem = (props) => {
  return (
    <li className={!props.item.completed ? "list-item" : "list-item-completed"}>
      <input type="checkbox" value={props.item.completed} />
      {props.item.text}
    </li>
  );
};

const AddItem = (props) => {
  const [text, setText] = useState("");

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={(e) => props.handleSubmit(e, text)}>Add</button>
    </form>
  );
};

export default ToDo;
