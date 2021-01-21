import "./ToDo.css";
import React from "react";

/*
  Notes:
  
  - Your `ToDo` component receives initial
    data in a prop, `data`. See `src/data.json` 
    for the structure of that prop.
*/
class ToDo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: props.data,
      newItemText: ""
    };
  }

  addNewItem(e) {
    e.preventDefault();

    const newItem = {
      text: this.state.newItemText,
      completed: false
    };

    this.setState({
      items: this.state.items.concat(newItem),
      newItemText: ""
    });
  }

  handleCheckboxClick(i) {
    const newState = this.state;
    newState.items[i].completed = !newState.items[i].completed;

    this.setState(newState);
  }

  handleFormSubmission(e) {

  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.addNewItem(e)}>
          <input
            placeholder="new item"
            value={this.state.newItemText}
            onChange={(e) =>
              this.setState({ newItemText: e.currentTarget.value })
            }
          />
          <button>add</button>
        </form>
        <ul className="todo-list">
          {this.state.items.map((item, i) => {
            return (
              <li className={item.completed ? "completed-item" : ""}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onClick={() => this.handleCheckboxClick(i)}
                />
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDo;
