import React from 'react';
import { InputStyled } from './Style';

export interface IInputProps {
  name: string;
  placeholder?: string;
  style?: {
    margin?: string;
    maxWidth?: string;
  };
}

export const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return (
    <InputStyled {...rest}/>
  );
};
