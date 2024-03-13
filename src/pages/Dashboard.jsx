
import React, { useState } from 'react'
import Addvideo from '../Components/Addvideo'
import Video from '../Components/Video'
import Categories from '../Components/Categories'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {
  const [resstatus,setResStatus]=useState("")
  return (
    <>
   <h2>
      dashboard
    </h2> 
   

    <Row  className='m-1'>
      <Col sm='1' md='1' className='pt-5'>
        <Addvideo setRes={setResStatus}/>
        
      </Col>
      <Col sm='4' md='8'>
        <Video res={resstatus}/>
      </Col>
      <Col sm='2' md='3'>
        <Categories/>
        </Col>
      
    </Row>
    <ToastContainer/>
    </>
   
    
  )
}

export default Dashboard