import React, { useState } from 'react';
import useTodo from '../../hooks/useToDo';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ToDoList = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTodo();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List
      </Typography>
      <TextField
        label="Add a new task"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddTask}
        sx={{ marginBottom: 2 }}
      >
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <div key={index}>
            <ListItem
              secondaryAction={
                <>
                  <IconButton aria-label="add" edge="end" onClick={() => toggleTaskCompletion(index)}>
                    <Checkbox
                      icon={<CheckCircleOutlineIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      checked={task.completed}
                    />
                  </IconButton>
                  <IconButton aria-label="delete" edge="end" onClick={() => deleteTask(index)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={task.text}
                primaryTypographyProps={{
                  style: { textDecoration: task.completed ? 'line-through' : 'none' },
                }}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default ToDoList;
