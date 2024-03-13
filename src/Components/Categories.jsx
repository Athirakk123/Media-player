import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { AddCategories } from '../Services/allApis';
import CatagoryList from './CatagoryList';

function Categories() {
  const [show, setShow] = useState(false);
  const[Categories,setCategories]=useState("")
  const[addStatus,setAddStatus]=useState({})
  

  const getData=(val)=>{
    if(val){
      setCategories(val)
    }
  }
  const handleSubmit=async()=>{
    if(!Categories){
      toast.info("Enter Valid Data!!")
    }
    else{
      const data={name:Categories,videos:[]}
      const res=await AddCategories(data)
      if (res.status>=200 && res.status<300) {
        toast.success('successfull')
        setCategories("")
       handleClose()
       setAddStatus(res.data)

      } else {
        toast.error('failed')
        
      }
      console.log(Categories);
    }
  }

  const handleClose = () => { setShow(false);

    setShow(false)
    setCatagory("")
  };
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-grid'>
      <button variant='info' onClick={handleShow}>
        Add Categories
      </button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control  onChange={(e)=>{getData(e.target.value)}} type="text" placeholder="Enter category Name" />
      </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
<CatagoryList status= {addStatus}/>
    </>
  )
}

export default Categories