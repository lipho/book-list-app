/**
 * Selects the active book
 * @param state - Not application state but only the state this reducer is responsible for
 * @param action
 */
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}