export const SelectedBook = (book) => (dispatch) => {
  dispatch({
    type: "BOOK_SELECTED",
    selectedBook: book,
  });
};
