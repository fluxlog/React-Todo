import React from "react"


class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" })
  }

  removeFromList = e => {
    e.preventDefault();
    this.props.remover();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="Type Here"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        >
        </input>
        <button >Add to list</button>
        <button onClick={this.removeFromList}>Remove from list</button>
      </form>
    )
  }
}

export default TodoForm;