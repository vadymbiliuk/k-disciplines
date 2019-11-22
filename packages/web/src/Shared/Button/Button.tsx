import React from 'react';
import { ButtonStyled } from './Style';

export interface IButtonProps {
  
}

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
};
