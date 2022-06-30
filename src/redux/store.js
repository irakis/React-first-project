import { createStore } from 'redux';
import initialState from './InitialState';
import strContains from '../utils/strContains.js'
import shortid from 'shortid';

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
export const toggleFavorite = favoriteCard => ({ type: 'TOGGLE_CARD_FAVORITE', favoriteCard });


const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
};

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.newList, id: shortid() }];
    default:
      return statePart;
  }
}

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.newColumn, id: shortid() }]
    default:
      return statePart;
  }
}

const cardsReducer = (statePart = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.newCard, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.favoriteCard) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.newSearch
    default:
      return statePart
  }

}


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;