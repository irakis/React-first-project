import shortid from "shortid";

//selectors
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = (state) => {
  return state.lists
};
//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//action creator
export const addList = newList => ({ type: ADD_LIST, newList });

const listsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.newList, id: shortid() }];
      default:
        return statePart;
    }
  }

  export default listsReducer;