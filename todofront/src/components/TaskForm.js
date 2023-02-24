import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormInput = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: #f5f5f5;
`;

const FormTextarea = styled.textarea`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: #f5f5f5;
`;

const FormCheckbox = styled.input`
  margin-bottom: 16px;
  margin-right: 8px;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #61dafb;
  color: #fff;
`;

function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = { title, description, completed };
    onCreateTask(task);
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormLabel htmlFor="title">Title</FormLabel>
      <FormInput
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <FormLabel htmlFor="description">Description</FormLabel>
      <FormTextarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div>
        <FormLabel htmlFor="completed">Completed</FormLabel>
        <FormCheckbox
          type="checkbox"
          id="completed"
          checked={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
      </div>
      <FormButton type="submit">Create Task</FormButton>
    </FormWrapper>
  );
}

export default TaskForm;
