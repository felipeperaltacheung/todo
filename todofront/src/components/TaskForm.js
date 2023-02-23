import React, { useState } from 'react';

function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const task = { title, description, completed };
    onCreateTask(task);
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={event => setDescription(event.target.value)} />
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input type="checkbox" id="completed" checked={completed} onChange={event => setCompleted(event.target.checked)} />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
}

export default TaskForm;
