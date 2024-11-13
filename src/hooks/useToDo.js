import { useState } from 'react';

const useTodo = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  return { tasks, addTask, deleteTask, toggleTaskCompletion };
};

export default useTodo;
