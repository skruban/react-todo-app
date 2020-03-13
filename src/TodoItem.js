require('./TodoItem.css');
const React = require('react');

function TodoItem ({ TodoItem }) {
  return (
  <div>{TodoItem.name}</div>
  );
}

module.exports = TodoItem; 
