import { InterpolationWithTheme } from '@emotion/core';

export const ApplicationStyled = {
  ['*']: {
    margin: 0,
    padding: 0,

    border: 0,

    fontSize: '100%',
    font: 'inherit',  

    verticalAlign: 'baseline',

    ['&:focus']: {
      outline: 'none',
    },
  },
  'html, body, #root': {
    height: '100%',
  },
  body: {
    lineHeight: 1,
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',

    background: 'linear-gradient(to bottom, #4b6cb7, #182848)',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  [`blockquote:before, blockquote:after,
  q:before, q:after`]: {
    content: 'none',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
} as InterpolationWithTheme<{}>;
