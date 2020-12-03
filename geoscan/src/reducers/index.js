const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOK_ADDED':
      return {
        books: action.payload
      };

    default:
      return state;
  }
};

export default reducer;