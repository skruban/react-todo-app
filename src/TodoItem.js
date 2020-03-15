require('./TodoItem.css');
const React = require('react');

function TodoItem ({ item }) {
  return (
    <div className={`todo-item ${item.id}`}>
      <input type="radio" checked={item.isCompleted} class="field-task-status" />
      <span className="field-task">{item.name}</span>
      <button className="button-delete-task">delete</button>
    </div>
  );
}

module.exports = TodoItem; 
