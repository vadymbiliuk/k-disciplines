import React from 'react';
import { Home } from './Home';
import { Route, Switch } from 'react-router';

export interface IRouterProps {

}

export const Router: React.FC<IRouterProps> = ({ }) => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
