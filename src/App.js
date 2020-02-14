import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topics from './components/Topics';
import PickedUpUsers from './components/PickedUpUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col
 } from 'react-bootstrap';
 import dotenv from 'dotenv'

 dotenv.config()


function App() {
  return (
    <Container>
      <Row>
        <Col><Topics process={process}/></Col>
        <Col><PickedUpUsers process={process}/></Col>
      </Row>  
    </Container>
  );
}

export default App;
