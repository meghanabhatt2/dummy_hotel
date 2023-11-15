import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React  from 'react';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide" style={{height:'500px'}}
        />
        <Carousel.Caption className="frmdesign">
        <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
        <h1 styly={{color:'white'}}>Register Here</h1>
          <Form.Label className='lblfrm'>Name</Form.Label>
          <Form.Control type="password" placeholder="Name" className='frmcnt' />
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>        */}
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='lblfrm'> Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className='lblfrm'>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Button variant="white" type="submit" style={{color:'white'}}>
        Submit
      </Button>
  

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      
    </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide" style={{height:'500px'}}
        />

        <Carousel.Caption className="frmdesign">
        <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
        <h1 styly={{color:'white'}}>Register Here</h1>
          <Form.Label className='lblfrm'>Name</Form.Label>
          <Form.Control type="password" placeholder="Name" className='frmcnt' />
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>        */}
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='lblfrm'> Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className='lblfrm'>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Button variant="white" type="submit" style={{color:'white'}}>
        Submit
      </Button>
  

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      
    </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide" style={{height:'500px'}}
        />

        <Carousel.Caption className="frmdesign">
        <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
        <h1 styly={{color:'white'}}>Register Here</h1>
          <Form.Label className='lblfrm'>Name</Form.Label>
          <Form.Control type="password" placeholder="Name" className='frmcnt' />
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>        */}
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='lblfrm'> Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label className='lblfrm'>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Button variant="white" type="submit" style={{color:'white'}}>
        Submit
      </Button>
  

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      
    </Form>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;