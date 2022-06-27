import { createStore } from 'redux';
import initialState from './InitialState';
import strContains from '../utils/strContains.js'

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString)
  );
export const getAllColumns = state => {
  return state.columns
};
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsById = ({ columns }, listId) => {
  return (columns.filter(column => column.listId === listId)
  )
};
export const getAllLists = (state) => {
  return state.lists
};

// action creators
export const addColumn = newColumn => ({ type: 'ADD_COLUMN', newColumn });
export const addCard = newCard => ({ type: 'ADD_CARD', newCard });
export const updateSearching = newSearch => ({ type: 'UPDATE_SEARCHSTRING', newSearch })
export const addList = newList => ({ type: 'ADD_LIST', newList });
export const toggleFavorite = favoriteCard => ({ type:'TOGGLE_CARD_FAVORITE' , favoriteCard });
 


function reducer(state, payload) {
  
  switch (payload.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...payload.newColumn }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...payload.newCard }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: payload.newSearch };
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...payload.newList }] };
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === payload.favoriteCard) ? { ...card, isFavorite: !card.isFavorite } : card) };
      default:
      return state;
  }
};
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export default store;