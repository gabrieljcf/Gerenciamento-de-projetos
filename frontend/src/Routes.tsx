import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GetProjects from './pages/GetProjects';
import ListProjects from './pages/ListProjects';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={GetProjects} />
      <Route path="/projects" exact component={ListProjects} />
    </BrowserRouter>
  );
}

export default Routes;