
import React from 'react';
import { Container } from 'react-bootstrap';
import style from '../styles/Home.module.css';


function Home() {
  return (
    <Container>
      <h1 className={`${style['h1-color']}`}>Welcome to My App</h1>
    </Container>
  );
}


export default Home;