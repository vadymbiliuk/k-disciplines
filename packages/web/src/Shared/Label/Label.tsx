import React from 'react';
import { LabelStyled } from './Style';

export interface ILabelProps {
  
}

export const Label: React.FC<ILabelProps> = ({ children }) => {
  return (
    <LabelStyled>
      {children}
    </LabelStyled>
  );
};
