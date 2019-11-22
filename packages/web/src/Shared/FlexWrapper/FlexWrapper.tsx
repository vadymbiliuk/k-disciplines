import React from 'react';
import { FlexWrapperStyled } from './Style';

export interface IFlexWrapperProps {
  flexDirection?: 'column' | 'row';
  justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-around';
  alignItems?: 'center';
  flexWrap?: 'wrap' | 'nowrap';
  maxWidth?: string;
  padding?: string | number;
}

export const FlexWrapper: React.FC<IFlexWrapperProps> = ({ children, ...rest }) => {
  return (
    <FlexWrapperStyled style={rest}>
      {children}
    </FlexWrapperStyled>
  );
};
