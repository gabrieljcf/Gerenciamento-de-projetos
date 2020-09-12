import React from 'react';

interface TaskProps {
  id: string;
  name: string;
}

const TaskItem: React.FC<TaskProps> = ({ name, id }) => {
  return (
    <div className="container-item">
      <article className="card">
        <p className="project-name">{name}</p>
      </article>
    </div>
  );
}

export default TaskItem;