import { createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

export default createGlobalStyle`
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme.layout.backgroundColor};
  }
  div#__next {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;
