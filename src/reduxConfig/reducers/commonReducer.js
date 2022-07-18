const iState = {
  selectedBook: {},
};

const commonReducer = (state = iState, action) => {
  switch (action.type) {
    case "BOOK_SELECTED": {
      return {
        ...state,
        selectedBook: action.selectedBook,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
