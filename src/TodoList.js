const React = require('react');
const AddTodo = require('./AddTodo');
const TodoItem = require('./TodoItem');

function TodoList () {
  const [todoList, addTodo] = React.useState([]);

  return (
    <React.Fragment>
      <AddTodo todoList={todoList} addTodo={addTodo} />
      {todoList.forEach((todoItem) => {
        return <TodoItem todoItem={todoItem} />
      })}
    </React.Fragment>
  )
}

module.exports = TodoList;
