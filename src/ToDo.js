import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = ({ data }) => {
  const [list, setList] = useState(data);
  const [newItem, setNewItem] = useState("");

  // const isChecked = useMemo(() => (
  //   <li className="checked"></li>
  // ))

  const clickEvent = () => {
    const newList = [...list];
    newList.push({ complete: false, text: newItem });
    setList(newList);
  };

  const changeCompleted = (index) => {
    // newList[index].completed...
    // setCompted(!complted)
  };

  // console.log(list);
  return (
    <>
      <div>
        <input
          className="input"
          placeholder="new item"
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button className="button" onClick={clickEvent}>
          Add
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li className={item.completed ? "completed" : "incompleted"}>
            <button onClick={changeCompleted(index)} />
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
