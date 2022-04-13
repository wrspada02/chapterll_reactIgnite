  
  import React from 'react';
  import { useState } from 'react';
  import styled from "styled-components"; 
  import Modal from "react-modal";
  import { GlobalStyle } from './styles/global';
  import { Header } from './components/Header';
  import { Dashboard } from './components/Dashboard';

  Modal.setAppElement('#root'); //Questao de acessibilidade

  export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
    return (
      <>
      <Header
      onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle/>
      </>
    );
  }

