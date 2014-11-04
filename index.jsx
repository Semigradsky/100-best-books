/**
 * @jsx React.DOM
 */
      
fetch('lists/Bokklubben World Library.json').then(function(response) {
  return response.json()
}).then(function(json) {
  React.renderComponent(
    <ListBooks books={json.books}/>,
    document.getElementById('container')
    ); 
});