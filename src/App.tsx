  
  import React from 'react';
  import { useState } from 'react';
  import styled from "styled-components"; 
  import Modal from "react-modal";

  import { GlobalStyle } from './styles/global';

  import { Header } from './components/Header';
  import { Dashboard } from './components/Dashboard';
  import { NewTransactionModal } from './components/NewTransactionModal';
  import { TransactionsProvider } from './hooks/useTransactions';

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
      <TransactionsProvider>
      <Header
      onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
      </TransactionsProvider>
    );
  }

