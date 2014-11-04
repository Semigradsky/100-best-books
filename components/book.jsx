/**
 * @jsx React.DOM
 */

var Book = React.createClass({

  render: function() {
    return <li className='book'>
      <span className='book-author'>{this.props.data.author}</span>
      &nbsp;-&nbsp;
      <span className='book-title'>"{this.props.data.title}"</span>
      <span className='book-year'>[{this.props.data.year}]</span>
      <span className='book-language'>({this.props.data.language})</span>
    </li>;
  }

});