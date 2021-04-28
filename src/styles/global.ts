import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #fc3;
    --bg: #333;
    --text: #e5e7e7;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  a {
    color: var(--highlight);
  }
`;
