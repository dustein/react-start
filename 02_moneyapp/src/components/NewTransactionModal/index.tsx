import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from "../../assets/close-button.svg";
import incomeImg from "../../assets/arrow-up.svg";
import outcomeImg from "../../assets/arrow-down.svg";
import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranscationModal({isOpen, onRequestClose}: NewTransactionModalProps) {

  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] =  useState('');
  const [amount, setAmount] =  useState(0);

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type,
    })
  }

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

      <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar transação</h2>
        <input type="text" placeholder='Titulo' 
          value={title} onChange={event => setTitle(event.target.value)}
        />
        <input type="number" placeholder='Valor' 
          value={amount} onChange={event => setAmount(Number(event.target.value))}/>
        
        <TransactionTypeContainer>

          <RadioBox 
            type='button' 
            onClick={() => {setType('deposit');}}
            isActive = {type == 'deposit'}
            activeColor = "green"
          >
            <img src={incomeImg} alt="Entrada" className='diminui-tamanho-icones' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type='button' 
            onClick={() => {setType('withdraw');}} 
            isActive = {type == 'withdraw'}
            activeColor = "red"
          >
            <img src={outcomeImg} alt="Saida" className='diminui-tamanho-icones' />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>
        
        <input type='text' placeholder='Categoria' 
          value={category} onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      
      </Container>

    </Modal>          
  )
}