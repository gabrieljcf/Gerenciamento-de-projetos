import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TaskItem from '../../components/TaskItem';

import api from '../../services/api';

interface TaskProps {
  match: {
    url: string;
  };
}

interface Task {
  id: string;
  name: string;
  status: number;
  projectId: string;
}

function ListTasks(props: TaskProps) {
  const [tasks, setTasks] = useState([]);
  const route = props.match.url;

  useEffect(() => {
    api.get(route)
      .then(response => {
        const results = response.data;
        setTasks(results);
      });
  }, [route]);

  return (
    <div>
      <PageHeader />
      
      {tasks.map((task: Task) => (
        <TaskItem 
          key={task.id} 
          id={task.id} 
          name={task.name} />)
      )}
      
    </div>
  );
}

export default ListTasks;