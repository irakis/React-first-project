import { createStore } from 'redux';
import initialState from './InitialState';
import strContains from '../utils/strContains.js'

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state =>{
  return state.columns
};

console.log(getAllColumns);


function reducer(state, payload) {
  console.log(state);
  console.log('jaki jest payload?: ', payload);
  switch (payload.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...payload.newColumn }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...payload.newCard }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: payload.newSearch };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;