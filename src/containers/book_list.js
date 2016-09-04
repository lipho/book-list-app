import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends React.Component {

  renderList() {
    return this.props.books.map(b =>
      <li
        key={b.title}
        onClick={() => this.props.selectBook(b)}
        className="list-group-item">
        {b.title}
      </li>
    );
  }

  render() {
    return (
      <ul className="list-group-col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/**
 * Whatever is returned will show up as props inside of BookList
 * @param state
 * @returns {{books: *}}
 */
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

/**
 * Whenever selectBook is called, the result should be passed to all of our reducers
 * Anything returned from this function will end up as props on the BookList container
 * @param dispatch - imported function that delegates to reducers
 * @returns {Function|Object}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook : selectBook }, dispatch)
}
/**
 * To Promote BookList from a component to a container - it needs to know about
 * this new dispatch method, selectBook.  This makes it available in total as a prop.
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList)