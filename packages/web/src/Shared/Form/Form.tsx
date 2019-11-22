import React from 'react';
import { FormStyled } from './Style';

export interface IFormProps {
  
}

export const Form: React.FC<IFormProps> = ({ children }) => {
  return (
    <FormStyled>
      {children}
    </FormStyled>
  );
};
