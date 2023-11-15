import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function AutoLayoutVariableExample() {
  return (
    <Container>
      <Row >
        <Col xs={12} md={5} className="mt-5 mb-5">
          <h1 style={{textAlign:'center'}}>About Us</h1>
          <p style={{textAlign:'left'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <br/>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Button className="btn" variant="outline-primary">Read More</Button>{' '}
        </Col>
        <Col xs={12} md={7} className="mt-5 mb-5">
        <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
            {/* <img src='https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80' height={'350px'} width={'400px'}/> */}
            </Col>
    
      </Row>
    
    </Container>
  );
}

export default AutoLayoutVariableExample;