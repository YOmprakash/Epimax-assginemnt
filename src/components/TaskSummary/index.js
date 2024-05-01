import React, { useState, useEffect } from 'react';

import { Bar, Pie } from 'chart.js/auto';
const TaskSummary = ({ tasks }) => {
  const [taskCountByStatus, setTaskCountByStatus] = useState({});
  const [taskCompletionByUser, setTaskCompletionByUser] = useState({});


  return (
    <div>
      <h1>Task Summary</h1>
      <div className="charts">
      dd
      </div>
    </div>
  );
};

export default TaskSummary;
