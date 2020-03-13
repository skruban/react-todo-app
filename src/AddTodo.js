require('./AddTodo.css');
const React = require('react');

function AddTodo ({ todoList, addTodo }) {
  const [taskName, addTaskName] = React.useState('');
  const handleChange = ({ target: { value } }) => {
    addTaskName(value);
  };
  const handleSubmit = () => {
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
      <input type="text" value={taskName} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Task</button>
    </React.Fragment>
  );
}

module.exports = AddTodo;
