  
  import React from 'react';
  import styled from "styled-components"; 
  import { GlobalStyle } from './styles/global';
  import { Header } from './components/Header';
  import { Dashboard } from './components/Dashboard';

  const Title = styled.h1`
    color: #8257e6;
  `;

  export function App() {
    return (
      <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
      </>
    );
  }

