import React from 'react';

import './styles.css';

interface TaskProps {
  id: string;
  name: string;
  status: number;
}


const TaskItem: React.FC<TaskProps> = ({ name, id }) => {
  return (
      <article className="card">
        <p className="project-name">{name}</p>
        
        <div className="container-buttons-tasks">
          <button className="update-button">Editar</button>
          <button className="delete-button">Excluir</button>
          <button className="complete-button">Completar</button>
        </div>
      </article>
  );
}

export default TaskItem;