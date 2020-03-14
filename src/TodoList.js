const React = require('react');
const AddTodo = require('./AddTodo');
const TodoItem = require('./TodoItem');

function TodoList () {
  const [todoList, addTodo] = React.useState([]);
  const handleSubmit = (taskName) => {
    addTodo([
      ...todoList,
      {
        done: false,
        name: taskName,
        id: `_task_${todoList.length}`
      }
    ]);
  };

  return (
    <React.Fragment>
      <AddTodo handleSubmit={handleSubmit} />
      {todoList.map((item) => {
        return <TodoItem key={item.id} item={item} />
      })}
    </React.Fragment>
  )
}

module.exports = TodoList;
