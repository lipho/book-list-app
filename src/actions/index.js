/**
 * Happens when a user clicks on a book.
 * selectBook is an ActionCreator.  It needs to return an action
 * @param book - object with a title
 */
export function selectBook(book) {
  return {
    //actions have to have a type. sometimes a payload
    //type is always a String in caps
    type: 'BOOK_SELECTED',
    payload: book
  }
}