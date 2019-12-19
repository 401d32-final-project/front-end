import { createStore, combineReducers, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import thunk from 'redux-thunk';


export const actions = {
  subscribeToMessages: () => (dispatch) => {
    const socket = io('https://news-hub-401-final.herokuapp.com')
    socket.on('MESSAGE', (message) => {
      dispatch(actions.addMessage(message));
    });
    dispatch(actions.connect(socket));
  },
  fetchMessages: () => (dispatch) => {
    return fetch('https://news-hub-401-final.herokuapp.com/messages')
      .then(response => response.json())
      .then(data => dispatch(actions.setMessage(data)));
  },
  addMessage: (message) => {
    return {
      type: 'ADD_MESSAGE',
      payload: message,
    }
  },
  setMessages: (messages) => {
    return {
      type: 'SET_MESSAGES',
      payload: messages,
    }
  },
  connect: (socket) => {
    return{
      type: 'CONNECT',
      payload: socket,
    }
  }
}

//REDUCERS 

const messageReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    case 'SET_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}

const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CONNECT':
      return action.payload;
    case 'DISCONNECT':
      return {};
    default:
      return state;
  }
}

const reducers = combineReducers({
  message: messageReducer,
  socket: socketReducer,
})

export default () => createStore(reducers, applyMiddleware(thunk));