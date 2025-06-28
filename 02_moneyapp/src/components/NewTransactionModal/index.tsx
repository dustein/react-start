import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from "../../assets/close-button.svg";
import incomeImg from "../../assets/arrow-up.svg";
import outcomeImg from "../../assets/arrow-down.svg";
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranscationModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const [type, setType] = useState('deposit');

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay" 
      className="react-modal-content"
    >
      
      <button type='button' onClick={onRequestClose} className='react-modal-close'>
        <img className='botao-fechar-modal' src={closeImg} alt="Fechar modal" />
      </button>

      <Container>

        <h2>Cadastrar transação</h2>
        <input type="text" placeholder='Titulo' />
        <input type="number" placeholder='Valor' />
        
        <TransactionTypeContainer>

          <RadioBox 
            type='button' 
            onClick={() => {setType('deposit');}}
            isActive = {type == 'deposit'}
          >
            <img src={incomeImg} alt="Entrada" className='diminui-tamanho-icones' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type='button' onClick={() => {setType('withdraw');}} isActive = {type == 'withdraw'}>
            <img src={outcomeImg} alt="Saida" className='diminui-tamanho-icones' />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>
        
        <input type='text' placeholder='Categoria'></input>
        <button type="submit">Cadastrar</button>
      
      </Container>

    </Modal>          
  )
}