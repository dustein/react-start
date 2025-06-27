import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsTable } from "./components/TransactionsTable";
import { useState } from "react";
import Modal from 'react-modal';

// Para acessibilidade apenas:
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionMOdalOpen, setIsNewTransactionMOdalOpen ] = useState(false);

  function handleOpenModal() {
    setIsNewTransactionMOdalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransactionMOdalOpen(false);
  }  

  return (
    <>
      <Header onHandleOpenModal={handleOpenModal} />
      <Dashboard />
      <Modal isOpen={isNewTransactionMOdalOpen} onRequestClose={handleCloseModal}>
          <h2>Cadastrar !</h2>
      </Modal>      
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}

