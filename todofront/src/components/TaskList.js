import React from 'react';

function TaskList ({ tasks }) {
    return(
       <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
        </li>
      ))}
    </ul> 
    );
}

export default TaskList;