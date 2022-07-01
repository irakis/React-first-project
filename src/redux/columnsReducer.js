import shortid from "shortid";

//selectors
export const getAllColumns = state => {
  return state.columns
};

//actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const getColumnsById = ({ columns }, listId) => {
  return (columns.filter(column => column.listId === listId)
  )
};

//action creators
export const addColumn = newColumn => ({ type: ADD_COLUMN, newColumn });

const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.newColumn, id: shortid() }]
      default:
        return statePart;
    }
  }

  export default columnsReducer;