

import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Roomdetail from './Roomdetail';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import axios from 'axios';


function ContainerFluidExample() {
    const [data, setData] =useState([]);
// const send =(post)=>{
// console.log(post);
// }
    useEffect(()=>{
      // async function getdata(){
      //     const res= await 
          axios.get(`http://localhost:3000/Roomdetail`)
          .then((res)=> setData(res.data));
      // console.log(res);
      }, []);

  return (
    <Container fluid className='bgc'>
        <Container>
        <Row>
                        <h1 style={{textAlign:'center'}} className='mt-5'> Our Room's </h1>
                        <p style={{textAlign:'center'}}>Lorem Ipsum available, but the majority have suffered</p>
            {
                data.map((post,id)=>{
                  // const{id,imgdata,title}=post;
                    return(
                        
                        <Col sm={12} md={4} className='mt-5 mb-5'>
                        <Card key={id}>
                        {/* key={id} */}
                      <Card.Img variant="top" className="img-fluid" src={post.imgdata} height={'300px'} />
                      <Card.Body>
                        <Card.Title style={{textAlign:'center'}}>{post.title}</Card.Title>
                        <Card.Text style={{textAlign:'center'}}>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.<br/>
                          <Button variant="outline-primary" href=" " onClick={()=> setData(id)} style={{justifyContent:'center'}}><Link to={`Roomenquiry/${post.id}`}>View Detail</Link></Button>{' '}
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                        </Col>
                  
                    )
                })
    
}    </Row>
      </Container>
    </Container>
  );
 }

export default ContainerFluidExample;