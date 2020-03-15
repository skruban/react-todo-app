require('./TodoList.css');
const React = require('react');
const AddTodo = require('./AddTodo');
const TodoItem = require('./TodoItem');

function TodoList () {
  const [todoList, addTodo] = React.useState([
    {
      isCompleted: true,
      name: 'eat dinner',
      id: 'task-1'
    },
    {
      isCompleted: false,
      name: 'commit atleast once in github',
      id: 'task-2'
    }
  ]);
  const handleSubmit = (name) => {
    addTodo([
      ...todoList,
      {
        isCompleted: false,
        name,
        id: `task-${todoList.length}`
      }
    ]);
  };

  return (
    <div className="todo-list">
      <h3 className="todo-title">React Todo App</h3>
      <AddTodo handleSubmit={handleSubmit} />
      {todoList.map((item) => {
        return <TodoItem key={item.id} item={item} />
      })}
    </div>
  )
}

module.exports = TodoList;
