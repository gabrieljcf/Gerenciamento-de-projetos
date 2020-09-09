import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import ProjectItem from '../../components/ProjectItem';
import Loading from '../../components/Loading';
interface Project {
  id: string;
  name: string;
}

function ListProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/projects')
      .then(response => {
        const results = response.data;
        setProjects(results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <PageHeader />
      {isLoading
        ? <Loading />
        : projects.map(({ id, name }: Project) => (
          <ProjectItem key={id} id={id} name={name} />)
        )
      }
    </div>
  );
}

export default ListProjects;