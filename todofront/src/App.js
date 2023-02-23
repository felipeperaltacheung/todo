import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  const handleCreateTask = task => {
    fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(data => setTasks([...tasks, data]))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
      <TaskForm onCreateTask={handleCreateTask} />
    </div>
  );
}

export default App;
