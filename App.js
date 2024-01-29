import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    showTasks();
  }, []);

  const addTask = () => {
    if (newTask === '') {
      alert('Please Enter Something');
    } else {
      setTasks([...tasks, { text: newTask, checked: false }]);
    }
    setNewTask('');
    saveData();
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
    console.log(updatedTasks);
    saveData();
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveData();
  };

  const saveData = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const showTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  };

  return (
    <div className="con1">
      <div className="to-do">
        <h2>TO-DO LIST</h2>
        <div className="top">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Type Something"
          />
          <button onClick={addTask}>OK</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.checked ? 'checked' : ''}>
              {task.text}
              <span onClick={() => toggleTaskCompletion(index)}>&times;</span>
               <span className="delete-task" onClick={() => deleteTask(index)}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


