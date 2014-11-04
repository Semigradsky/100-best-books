/**
 * @jsx React.DOM
 */

var ListBooks = React.createClass({
      
  getBooks: function() {
    var books = [];
    for (var i=0; i < this.props.books.length; i++) {
      books.push(<Book key={i} data={this.props.books[i]} />);
    }
    return books;
  },

  render: function() {

    var books = this.getBooks();  

    return <ol>{books}</ol>;
  }
});