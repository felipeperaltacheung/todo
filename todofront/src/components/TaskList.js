import React from 'react';
import styled from 'styled-components';

const TaskListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskListItem = styled.li`
  margin-bottom: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

function TaskList({ tasks }) {
  return (
    <TaskListWrapper>
      {tasks.map((task) => (
        <TaskListItem key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
        </TaskListItem>
      ))}
    </TaskListWrapper>
  );
}

export default TaskList;
