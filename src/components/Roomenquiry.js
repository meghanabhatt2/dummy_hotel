import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";

function RoomEnquiry() {
const [res,setRes] = useState([]);
const {id}=useParams();
 console.log(id);
    useEffect(()=>{
        async function getdata(){
            const res= await axios.get(`http://localhost:3000/Roomdetail/${id}`)
        // console.log(res);
        setRes(res.data);
        }
        getdata();
    }, []);
  return (
    
    <Container fluid="md" className='bgc'>
      <Row>
        <Row> 
<h1 style={{textAlign:'center'}} className="mt-5">Great Offers</h1>
<p style={{textAlign:'center'}} className="mb-5">  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </Row>
      
        <Row className='mb-5'>
        <Col sm={12} md={6}>
        <Image className="img-fluid" src={res.imgdata}/>
        </Col>
        <Col className='bgcon' sm={12} md={6}> 
        <h1 style={{textAlign:'center',marginTop:'15px',marginBottom:'15px'}}>{res.title} </h1>
           <h4 style={{textAlign:'center',marginTop:'10px',marginBottom:'10px'}}> <span>Rs. 3000/ Per Night</span></h4>
        <p style={{textAlign:'center',padding:'25px'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <Button variant="outline-danger" type="submit" style={{}}><Link to={`Roombooking/${res.id}`}>BOOK NOW</Link></Button>{' '}
        </Col>
        </Row>
      
      </Row>
    </Container>
  );
}

export default RoomEnquiry;