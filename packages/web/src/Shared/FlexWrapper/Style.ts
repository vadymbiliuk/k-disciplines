import styled from '@emotion/styled';

export const FlexWrapperStyled = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',

  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
}, (props) => ({
  flexDirection: props && props.style && props.style.flexDirection,
  justifyContent: props && props.style && props.style.justifyContent,
  alignItems: props && props.style && props.style.alignItems,
  flexWrap: props && props.style && props.style.flexWrap,
  padding: props && props.style && props.style.padding,
  maxWidth: props && props.style && props.style.maxWidth,
}));
