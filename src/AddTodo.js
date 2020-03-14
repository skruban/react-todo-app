require('./AddTodo.css');
const React = require('react');

function AddTodo ({ handleSubmit }) {
  const [taskName, addTaskName] = React.useState('');
  const handleChange = ({ target: { value } }) => {
    addTaskName(value);
  };

  return (
    <React.Fragment>
      <input type="text" value={taskName} onChange={handleChange} class="field-task-name" />
      <button onClick={() => handleSubmit(taskName)} class="button-add-task">Add Task</button>
    </React.Fragment>
  );
}

module.exports = AddTodo;
