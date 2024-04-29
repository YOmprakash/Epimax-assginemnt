import React, { useState } from 'react';
import TaskStatusView from '../TaskStatusView';
import './index.css';
import { Link } from 'react-router-dom';
const TaskListInterface = () => {
  const [task, setTask] = useState('');
  const [user, setUser] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(true);

  const users = ['User1', 'User2', 'Team1', 'Team2']; // Replace with your actual users or teams

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task && user) {
      setTasks([...tasks, { task, user }]);
      setTask('');
      setUser('');
      setSelectedTask(false)
    }
  };

  return (
    <>
    {selectedTask ?   
    <div className='task-list-section'>
    <div className='task-list-container'>
      <h1>A simple to do list <br/>to manage it all</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task"
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
        <button type="submit">Add</button>
        </div>
      </form>
      <div className='task-list'>
        {tasks.map((task, index) => (
          <div key={index} className='task-item-card'>
            <h2>{task.task}</h2>
            <div className='task-info'>
            <p>{task.user}</p>
            <Link to={`/taskStatus`}>
            <button>View</button>
            </Link>
            </div>
           
          </div>
        ))}
      </div>
    </div>
    </div>
   :<TaskStatusView /> }
     </>
  );
};

export default TaskListInterface;
