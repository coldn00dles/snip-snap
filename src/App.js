import './App.css';
import React from 'react'
import Container from './components/Container';
import Heading from './components/Heading';
import Search from './components/Search';

function App() {
  return (
    <Container>
      <Heading />
      <Search />
    </Container>
  );
}

export default App;
