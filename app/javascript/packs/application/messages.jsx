import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

export function addMessage(message) {
  return {
    type: 'ADD_MSG',
    message
  }
}

const initialState = {
  messages: []
}

function messageApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MSG':
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          action.message
        ]
      })
    default:
      return state
  }
}

class Messages extends React.Component {
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

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const MessageList = connect(
  mapStateToProps
)(Messages)


document.addEventListener('DOMContentLoaded', () => {
  const containerDOM = document.getElementById('messages')
  const messages = JSON.parse(containerDOM.dataset.messages)
  window.store = createStore(messageApp, { messages: messages })
  ReactDOM.render(
    <Provider store={store}>
      <MessageList />
    </Provider>,
    containerDOM
  )
})
