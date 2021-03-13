import "./ToDo.css";
import React, { useState } from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/


//const ToDo = () => <i>todos go here</i>;
class ToDoClass extends React.Component {
  constructor(props){
    super(props);

    this.state={items: this.props.data, input: ''};
  }

  lineClicked = (event, index) => {
    this.setState(items[index].completed: !event.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <span><input id='listinput' type='text' onChange={(event) => this.setState({input: event.target.value})} />
          <button onClick={() => this.setState({items: [...this.state.items, {text: this.state.input, completed: false }]})}>Add</button></span>
        </div>
        <ul>
        {this.state.items.map((items, index) => {
          return <li><span className={items.completed ? 'is-completed' : 'is-not-completed'} onClick={ (event) => lineClicked(event, index)}>{items.text}</span></li>
        })}
        </ul>
      </div>)
  }
}

export default ToDoClass;
