const React = require('react');
const AddTodo = require('./AddTodo');
const TodoItem = require('./TodoItem');

function TodoList () {
  const [todoList, addTodo] = React.useState([]);

  return (
    <React.Fragment>
      <AddTodo addTodo={addTodo} />
      <TodoItem todoList={todoList} />
    </React.Fragment>
  )
}

module.exports = TodoList;
