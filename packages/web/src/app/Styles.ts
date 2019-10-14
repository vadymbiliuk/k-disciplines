import { InterpolationWithTheme } from '@emotion/core';

export const ApplicationStyled = {
  ['*']: {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  body: {
    lineHeight: 1,
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
