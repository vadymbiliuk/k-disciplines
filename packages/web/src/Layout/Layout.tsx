import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MainStyled } from './Styles';

export interface ILayoutProps {
  
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <MainStyled>
        {children}
      </MainStyled>
      <Footer/>
    </>
  );
};
