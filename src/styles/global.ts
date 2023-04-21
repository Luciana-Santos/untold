import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: ' border-box',
  },

  'h1, h2, h3': {
    lineHeight: 1,
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },

  ul: {
    listStyle: 'none',
  },

  body: {
    minHeight: '100vh',
    lineHeight: '1.5',
    backgroundColor: '$black500',
    fontFamily: 'Montserrat, sans-serif',
    color: '$white200',
    display: 'grid',
    placeContent: 'center',
  },
})
