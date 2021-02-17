import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --orange: #ff9000;
    --red: #c53030;
    --input: #232129;
    --background: #312e38;
    --white-false: #f4ede8;
    --white: #fff;
    --gray-hard: #666360;
    --gray: #999591;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    color: #707070;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

// declarando
// elemento {
//   --cor-bg-principal: brown;
// }
// usando
// elemento {
//   background-color: var(--cor-bg-principal);
// }
