import React from 'react';
import { Home } from './Home';
import { SignUp } from './SignUp';
import { Route, Switch } from 'react-router';

export interface IRouterProps {

}

export const Router: React.FC<IRouterProps> = ({ }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};
