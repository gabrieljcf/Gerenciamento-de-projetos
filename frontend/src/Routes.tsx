import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GetProjects from './pages/GetProjects';
import ListProjects from './pages/ListProjects';
import Tasks from './pages/Tasks';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={GetProjects} />
      <Route path="/projects" component={ListProjects} />
      <Route path="/Tasks/:id" component={Tasks} />
    </BrowserRouter>
  );
}

export default Routes;