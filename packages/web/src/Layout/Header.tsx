import React from 'react';
import { HeaderStyled, NavStyled } from './Styles';

export interface IHeaderProps {
  
}

export const Header: React.FC<IHeaderProps> = ({ }) => {
  return (
    <HeaderStyled>
      <NavStyled>
      </NavStyled>
    </HeaderStyled>
  );
};
