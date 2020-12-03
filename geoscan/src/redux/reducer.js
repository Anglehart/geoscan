const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'BOOK_ADDED':
      const newBook = action.payload;
      newBook.key = state.books.length;
      
      return {
        books: state.books.concat([newBook])
      };

    default:
      return state;
  }
};

export default reducer;