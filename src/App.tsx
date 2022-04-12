  
  import React from 'react';
  import styled from "styled-components"; 
  import { GlobalStyle } from './styles/global';

  const Title = styled.h1`
    color: #8257e6;
  `;

  export function App() {
    return (
      <>
      <h1>Hello world!</h1>
      <GlobalStyle/>
      </>
    );
  }

