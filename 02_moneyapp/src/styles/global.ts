import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --red:rgb(211, 66, 66);
    --blue:rgb(29, 65, 129);
    --blue-light:rgb(114, 117, 209);
    --green:rgb(145, 225, 169);
    --text-title:rgb(64, 64, 64);
    --text-body:rgb(118, 118, 118);
    --background: #FAFAFA;
    --shape:rgb(255, 255, 255);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.5%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  /* Para botao ou link desabilitado   */
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background:rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }

  .botao-fechar-modal {
    width: 30px;
  }
  .diminui-tamanho-icones {
    width: 30px;
  }

`;