import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import { Landing, TeacherForm, TeachersList } from './pages';

const Routes: React.FC = () => {
  return (
   <BrowserRouter>
      <Route path="/" component={Landing} exact/>
      <Route path="/study" component={TeachersList} exact/>
      <Route path="/give-classes" component={TeacherForm} exact/>
   </BrowserRouter>
  );
}

export default Routes;