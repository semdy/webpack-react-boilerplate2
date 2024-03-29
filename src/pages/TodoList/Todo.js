import React from 'react'

class Todo extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
      >
        {this.props.text}
      </li>
    )
  }
}

export default Todo
