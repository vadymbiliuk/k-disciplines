import React from 'react';
import { Layout } from '../Layout';
import { Global } from '@emotion/core';
import { Router } from '../Routes/Router';
import { ApplicationStyled } from './Styles';
import { BrowserRouter } from 'react-router-dom';

export interface IAppProps {
  
}

export const App: React.FC<IAppProps> = ({ }) => {
  return (
    <BrowserRouter>
      <Global styles={ApplicationStyled} />
      <Layout>
        <Router/>
      </Layout>
    </BrowserRouter>
  );
};
