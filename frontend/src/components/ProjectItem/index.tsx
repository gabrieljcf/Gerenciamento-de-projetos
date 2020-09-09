import React from 'react';
import { Link } from 'react-router-dom';

import GoIcon from '../../assets/images/icons/arrow-right.svg';

import './styles.css';

interface ProjectProps {
  id: string;
  name: string;
}

const ProjectItem: React.FC<ProjectProps> = ({ id, name }) => {
  return (

    <div className="container-item">
      <article className="card">
        <p className="project-name">{name}</p>
        <Link className="button-task" to={`tasks/${id}`}>
          <img src={GoIcon} alt="Ver Tarefas"/>
        </Link>
      </article>
    </div>
  );
}

export default ProjectItem;