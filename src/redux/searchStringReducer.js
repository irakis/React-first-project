



//actions
const createActionName = actionName => `app/searchString/${actionName}`
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

//action creators
export const updateSearching = newSearch => ({ type: UPDATE_SEARCHSTRING, newSearch })

const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
      case UPDATE_SEARCHSTRING:
        return action.newSearch
      default:
        return statePart
    }
  }

  export default searchStringReducer;