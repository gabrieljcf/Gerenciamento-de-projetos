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
      
      {tasks.map(({id, name, status}: Task) => (
        <TaskItem 
          key={id} 
          id={id} 
          name={name}
          status={status} />)
      )}

    </div>
  );
}

export default ListTasks;