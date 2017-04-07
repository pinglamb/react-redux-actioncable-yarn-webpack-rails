import React from 'react'
import ReactDOM from 'react-dom'

class Messages {
  constructor() {
    this.containerDOM = document.getElementById('messages')
    this.data = JSON.parse(this.containerDOM.dataset.messages)
    this.render()
  }

  push(message) {
    this.data.push(message)
    this.render()
  }

  render() {
    ReactDOM.render(
      <MessageList messages={this.data} />,
      this.containerDOM
    )
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.messages.map(message => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.messages = new Messages()
})
