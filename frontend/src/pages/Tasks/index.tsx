import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TaskItem from '../../components/TaskItem';

import api from '../../services/api';

import arrowIcon from '../../assets/images/icons/arrow-right.svg';

import './styles.css';

interface TaskProps {
  match: {
    url: string;
  };
}

interface Task {
  id: string;
  name: string;
  status: number;
};

function ListTasks(props: TaskProps) {

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const route = props.match.url;

  useEffect(() => {

    api.get(route)
      .then(response => {
        const results = response.data;
        setTasks(results);
      });

  }, [route]);

  async function handleAddTask() {
    if (!taskName) {
      alert('Informe uma tarefa');
      return;
    }

    try {

      const response = await api.post(route, { name: taskName });
      const newTask = [...tasks, response.data] as [];

      setTasks(newTask);
      setTaskName('');

    } catch (error) {
      alert('Erro ao cadastrar task tente novamente! :(');
    }
  }

  return (
    <>
      <PageHeader />
      <div className="container-item">

        <div className="container-input">
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Qual tarefa faremos hoje?"
            onChange={event => setTaskName(event.target.value)}
            value={taskName}
          />
          <button onClick={handleAddTask}>
            <img src={arrowIcon} alt="Salvar" />
          </button>

        </div>

        {tasks.map(({ id, name, status }: Task) => (
          <TaskItem
            key={id}
            id={id}
            name={name}
            status={status} />)
        )}

      </div>
    </>
  );
}

export default ListTasks;