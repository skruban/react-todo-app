require('./AddTodo.css');
const React = require('react');

function AddTodo ({ handleSubmit }) {
  const [taskName, addTaskName] = React.useState('');
  const handleChange = ({ target: { value } }) => {
    addTaskName(value);
  };

  return (
    <React.Fragment>
      <input type="text" value={taskName} onChange={handleChange} />
      <button onClick={() => handleSubmit(taskName)}>Add Task</button>
    </React.Fragment>
  );
}

module.exports = AddTodo;
