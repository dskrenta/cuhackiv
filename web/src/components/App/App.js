import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from '../Common/AuthRoute';
import Landing from '../Landing/Landing';
import NotFound from '../Common/NotFound';
import Topics from '../Topics/Topics';
import Topic from '../Topic/Topic';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <AuthRoute exact path='/topics' component={Topics} />
      <AuthRoute exact path='/topic/:id' component={Topic} />
      <Route path ='/' component={NotFound} />
    </Switch>
  </Router>
);

export default App;
