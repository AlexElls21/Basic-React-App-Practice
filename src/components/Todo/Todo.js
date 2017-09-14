import React, { Component } from 'react';
import './Todo.css'


class Todo extends Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }
   
  render() {
      console.log(this.props)
    return (
      <div className='Todo'>
        <h1>Todo</h1>
        <ol className='todoList'>
          {
              this.props.todo.map((item, i , arr) => {
                  //This is taking the info from our input that we set on this.state.input and rendering it in a LIST
                return (
                    <li key={i} onClick= {() => this.props.completeItem(i, item)}>{ item }</li>
                )
              })
          }
        </ol>
        <div className='inputContainer'>
          {/* <input type='checkbox' /> */}
          <input type="text" value= { this.state.input } onChange= {(e) => {
              //This is taking the text from our input field and assigning it to this.state so we can use it in our ordered list
              this.setState ({
                  input: e.target.value
                  //e.target.value targets the value we input into the input box
              })
          } } placeholder='Enter Todo' />
          <button onClick={() => this.props.addItem(this.state.input)}>Add The Thing!</button>
        </div>
      </div>
    )
  }
}
export default Todo