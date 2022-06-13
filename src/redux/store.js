import { createStore } from 'redux';
import initialState from './InitialState';

const reducer = (state, payload) => {
  switch(payload.type) {
    case 'ADD_COLUMN' :
      return {...state, columns: [...state.columns, {...payload.newColumn }]}
    case 'ADD_CARD' :
      return {...state, cards: [...state.cards, {...payload.newCard}]}
    default: 
      return state;
}};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;