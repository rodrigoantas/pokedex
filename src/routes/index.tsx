  
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Pokemon from '../pages/Pokemon';


const Routes: React.FC = () => (
  <Switch>
    <Route>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pokemons/:pokemon+" exact component={Pokemon} />
    </Route>
  </Switch>
);

export default Routes;