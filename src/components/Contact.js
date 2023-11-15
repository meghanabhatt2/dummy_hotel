import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function ContainerExample() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col sm={12} md={5} className="mt-3 mb-5 mr-5">
        <h1 style={{color:'black', textAlign:'center',marginRight:'20px'}}>Contact Us</h1>
        <Form className="frmdesign2">
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
      
          <Form.Label className='lblfrm'>Name</Form.Label>
          <Form.Control type="password" placeholder="Name" className='frmcnt' />
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>        */}
      </Row>
      <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label className='lblfrm'>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  className='frmcnt'/>
        </Form.Group> 

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='lblfrm'> Phone</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className='lblfrm'>Address</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Button variant="white" type="submit" style={{color:'white'}} className='lblfrm'>
        Submit
      </Button>
  

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      
    </Form>
        </Col>
        <Col>
        <h1 style={{color:'black', textAlign:'center'}}>Gallery</h1>
        <Row>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
        </Row>
        
        <Row>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
        </Row>
        
        <Row>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
          <Col xs={12} md={4} className="my-3">
          <Image className="img-fluid" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" height={'250px'} width={'650px'} responsive />
          </Col>
        </Row>

        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;