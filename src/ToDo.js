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

const ToDo = (props) => {
  const [list, setList] = useState(props.data);

  const [newItem, setNewItem] = useState("");

  var InputField = function (prop) {
    return (
      <input
        id="add-item"
        type="text"
        onChange={(event) => {
          setNewItem(event.target.value);
          console.log(newItem);
        }}
        value={newItem}
      />
    );
  };

  var AddButton = function () {
    return (
      <button
        type="submit"
        onClick={() => {
          setList([...list, { text: newItem, completed: false }]);
        }}
      >
        Add
      </button>
    );
  };

  var ItemList = function ({ list }) {
    return (
      <ul>
        {list.map((a) => (
          <li>{a.text}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <InputField />
      <AddButton />
      <ItemList list={list} />
    </div>
  );
};

export default ToDo;
