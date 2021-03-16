import "./ToDo.css";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/

const ToDo = (props) => {
  const [todos, setTodos] = useState(props.data);
  const [todoText, setTodoText] = useState("");

  const handleAddItem = () => {
    const newTodos = [...todos];
    const newTodo = {
      text: todoText,
      completed: false
    };
    newTodos.push(newTodo);
    setTodos(newTodos);
    setTodoText();
  };

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleCheck = (idx) => {
    const currentTodos = [...todos];
    currentTodos[idx].completed = !currentTodos[idx].completed;
    setTodos(currentTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        className="AddText"
        onChange={(e) => handleTodoTextChange(e)}
      ></input>
      <button className="AddButton" type="button" onClick={handleAddItem}>
        Add
      </button>
      <ul className="ToDoList">
        {todos.map((todo, idx) => {
          return (
            <ToDoItem
              key={`todo-${idx}`}
              text={todo.text}
              completed={todo.completed}
              handleCheck={handleCheck}
              idx={idx}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
