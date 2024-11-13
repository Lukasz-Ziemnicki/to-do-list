import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDoList from './ToDoList';

describe('ToDoList', () => {
  it('renders the To-Do List title', () => {
    render(<ToDoList />);

    expect(screen.getByText(/To-Do List/i)).toBeInTheDocument();
  });

  it('allows a user to add a new task', () => {
    render(<ToDoList />);
  
    const input = screen.getByLabelText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);
  
    fireEvent.change(input, { target: { value: 'First Task' } });
    fireEvent.click(addButton);
  
    expect(screen.getByText(/First Task/i)).toBeInTheDocument();
  });

  it('allows a user to delete a task', () => {
    render(<ToDoList />);

    const input = screen.getByLabelText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);
  
    fireEvent.change(input, { target: { value: 'Task to Delete' } });
    fireEvent.click(addButton);
  
    const deleteButton = screen.getByLabelText(/delete/i);
    
    fireEvent.click(deleteButton);
  
    expect(screen.queryByText(/Task to Delete/i)).not.toBeInTheDocument();
  });

  it('allows a user to mark a task as completed', () => {
    render(<ToDoList />);
  
    const input = screen.getByLabelText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);
    
    fireEvent.change(input, { target: { value: 'Task to Complete' } });
    fireEvent.click(addButton);
  
    const completeButton = screen.getByRole('checkbox');
    fireEvent.click(completeButton);
  
    expect(screen.getByText(/Task to Complete/i)).toHaveStyle({ textDecoration: 'line-through' });
  });
});
