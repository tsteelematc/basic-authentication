import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container';
import Public from './Public';
//import Nav from './Nav';
import Protected from './Protected';

function App() {
  return (
    <Container>
      <h1>
        Hello World ! ! !
      </h1>
      
      <Public></Public>
      
      {/* Commenting out components... VS Code Command + / rocks ! ! ! */}
      {/* Can't really show Nav by itself, but errors might be nice to see, keep swimming... */}
      {/* <Nav></Nav> */}

      <Protected></Protected>
    </Container>
  );
}

export default App;
