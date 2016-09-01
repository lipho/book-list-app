import React from 'react'

export default class BookList extends React.Component {

  render() {
    return (
      <ul className="list-group-col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    return this.props.books.map(b => <li key={b.title} className="list-group-item">{b.title}</li>)
  }

}