import React, { useState } from 'react';
import TaskStatusView from '../TaskStatusView';
import './index.css';

const TaskListInterface = () => {
  const [task, setTask] = useState('');
  const [user, setUser] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const users = ['User1', 'User2', 'Team1', 'Team2']; // Replace with your actual users or teams

  const handleAddTask = (e) => {
    e.preventDefault();
    setErrorMessage('')
    if (task && user) {
      setTasks([...tasks, { task, user }]);
      setTask('');
      setUser('');
    } else {
      setErrorMessage('Please enter a task name and select an assignee.');
    }
  };

  return (
    <>
    {selectedTask ?   
    <div className='task-list-section'>
    <div className='task-list-container'>
      <h1>A Simple Task List </h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className='form-group'>
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option value="">Assign</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <button className='add-button' type="submit"> + Add</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      {tasks.length > 0 && <h1 className='task-length'>Tasks: {tasks.length}</h1>}
      <div className='task-list'>
      
        {tasks.map((task, index) => (
          <div key={index} className='task-item-card'>
            <h2>{task.task}</h2>
            <div className='task-info'>
            <p>{task.user}</p>
           
            <button className='view-button'
          onClick={() => setSelectedTask(false)}>View Task</button>
        
            </div>
           
          </div>
        ))}
      </div>
    </div>
    </div>
   :<TaskStatusView tasks={tasks}/> }
     </>
  );
};

export default TaskListInterface;
