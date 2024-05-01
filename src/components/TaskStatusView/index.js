import React, { useState } from 'react';
import TaskSummary from '../TaskSummary'; // Import TaskSummary component
import './index.css';

const TaskStatusView = ({ tasks, updateTask }) => {
  const [selectedTask, setSelectedTask] = useState(null); // Track currently selected task for summary
  const [taskStatus, setTaskStatus] = useState({}); // Track the status of each task
  const [message, setMessage] = useState(''); // Track the message to display

  const handleStart = (taskId) => {
    setTaskStatus({ ...taskStatus, [taskId]: 'started' });
    setMessage('Task is started');
  };

  const handleEnd = (taskId) => {
    setTaskStatus({ ...taskStatus, [taskId]: 'completed' });
    setMessage('Your task is complete');
  };

  return (
    <>
      {selectedTask ? (
        <TaskSummary tasks={tasks.filter((task) => task.id === selectedTask)} /> // Filter tasks for selected one
      ) : (
        <div className="task-status-section">
          <div className="task-status-container">
            <h1>Task Status</h1>
            <p>Your Assigned Tasks: {tasks.length}</p>
            {message && <p>{message}</p>}
            {tasks.map((task, index) => (
              <div key={index} className="task-item">
                <h2>{task.task}</h2>
                <p>Assigned to: {task.user}</p>
                {taskStatus[task.id] === 'completed' ? (
                  <p>Task Completed</p>
                ) : taskStatus[task.id] === 'started' ? (
                  <button
                    type="button"
                    onClick={() => handleEnd(task.id)}
                    className="status-button end"
                  >
                    End Task
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleStart(task.id)}
                    className="status-button start"
                  >
                    Start Task
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TaskStatusView;
