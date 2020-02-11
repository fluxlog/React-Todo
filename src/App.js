import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import "./components/TodoComponents/Todo.css"


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList: [],
      message: 'hello from state!',
      idCounter: 0
    }
  }

  toggleTodo = clickedId => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === clickedId) {
        return { ...item, completed: !item.completed }
      }
      else {
        return item
      }
    })

    this.setState({
      todoList: newTodoList
    })
  }

  addTodo = todoText => {
    const newItem = {
      task: todoText,
      id: Date.now(),
      id: this.state.idCounter,
      completed: false
    }
    this.setState({ idCounter: this.state.idCounter + 1 })
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  remover = () => {
    const newTodoList = this.state.todoList.filter(todo => !todo.completed)

    this.setState({
      todoList: newTodoList
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>Add to list:</h2>
        <TodoForm 
        addTodo={this.addTodo}
        remover={this.remover}
       
        />
        <div>
        <TodoList
          todoList={this.state.todoList}
          toggleTodo={this.toggleTodo}
        />
      
        </div>
      </div>
    );
  }
}

export default App;
