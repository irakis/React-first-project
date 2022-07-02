import shortid from "shortid";
import strContains from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getCardToRemove = ({ cards }, cardId) => { cards.find(card => card.id === cardId) };

//actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creators
export const addCard = newCard => ({ type: ADD_CARD, newCard });
export const toggleFavorite = favoriteCard => ({ type: TOGGLE_CARD_FAVORITE, favoriteCard });
export const removeCard = payload => ({ type: REMOVE_CARD, payload })

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.newCard, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.favoriteCard) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
}

export default cardsReducer;