import React from 'react';
import { useLocation } from 'react-router';
import { HeaderStyled, NavStyled } from './Styles';

export interface IHeaderProps {
  
}

export const Header: React.FC<IHeaderProps> = ({ }) => {
  const location = useLocation().pathname;

  console.log(location);

  return location === ('/signin' || '/signup') ?
    <HeaderStyled>
      <NavStyled>
          Header
      </NavStyled>
    </HeaderStyled>
    :
    null;
};
