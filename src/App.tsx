  
  import React from 'react';
  import styled from "styled-components"; 
  import { GlobalStyle } from './styles/global';
  import { Header } from './components/Header';

  const Title = styled.h1`
    color: #8257e6;
  `;

  export function App() {
    return (
      <>
      <Header/>
      <GlobalStyle/>
      </>
    );
  }

