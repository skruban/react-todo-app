require('./TodoItem.css');
const React = require('react');

function TodoItem ({ item }) {
  return (
  <div>{item.name}</div>
  );
}

module.exports = TodoItem; 
