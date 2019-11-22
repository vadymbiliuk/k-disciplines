import styled from '@emotion/styled';
import { _deepBlue, _blue } from '@k-disciplines/core/src/theme/colors';

export const InputStyled = styled.input({
  width: '100%',
  padding: '10px 10px',
  boxSizing: 'border-box',

  backgroundColor: 'transparent',
  borderBottom: `1px solid${  _deepBlue}`,

  fontSize: '1em',

  transition: 'border 0.2s ease',

  ['&::placeholder']: {
    color: _deepBlue,
  },

  ['&:focus']: {
    borderBottom: `3px solid${  _blue}`,
  },
}, (props) => ({
  margin: props && props.style && props.style.margin,
  maxWidth: props && props.style && props.style.maxWidth,
}));
