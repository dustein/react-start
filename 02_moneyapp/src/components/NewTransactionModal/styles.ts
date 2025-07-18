import styled from "styled-components";
/* As classes de estilização do Modal {"react-modal-overlay"} e {"react-modal-content"} optamos por fazer no arquivo de css Global, veja lá */
import { darken, transparentize } from 'polished';
export const Container = styled.form`

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;
    background: #FAFAFA;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  
  button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #FFF;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;
      
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }

`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green'|'red';
}

const colors = {
  green: 'rgb(145, 225, 169)',
  red: 'rgb(211, 66, 66)'
}


export const RadioBox = styled.button<RadioBoxProps>`
  
  background: ${(props) => props.isActive ? transparentize(0.7, colors[props.activeColor]) : 'transparent'};
  
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;


  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.5s;

  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }  
`;