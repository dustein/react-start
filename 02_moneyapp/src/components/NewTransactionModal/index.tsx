import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from "../../assets/close-button.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranscationModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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
        <input type='text' placeholder='Categoria'></input>
        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>          
  )
}