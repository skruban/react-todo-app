require('./TodoItem.css');
const React = require('react');

function TodoItem ({ item }) {
  return (
    <div class="todo-item">
      <input type="radio" checked={item.isCompleted} class="field-task-status" />
      <span class="field-task">{item.name}</span>
      <button class="button-delete-task">delete</button>
    </div>
  );
}

module.exports = TodoItem; 
