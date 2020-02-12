import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topics from './components/Topics'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col
 } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Row>
        <Col><Topics/></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>  
    </Container>
  );
}

export default App;
