import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addhistory, deleteVideo } from '../Services/allApis';
import { toast } from 'react-toastify';

function VideoCard({video,del,cat}) {
    const [show, setShow] = useState(false);

   // const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    const [his,setHis]=useState({
        caption:video.caption,url:video.url,datetime:''
    })
//    const handleDrag=(e)=>{
//        e.preventDefault()
//        console.log(e.target);
//     }
    const handleDelete=async(id)=>{
        const res=await deleteVideo(id)
        if (res.status>=200 && res.status<300) {
            del("success")
            toast.success('Video Deleted')
        } else {
            toast.error('Error while deleting')
            
        }
    }
    const handleClose=() =>{
        console.log(his);
        addhistory(his)
        setShow(false)
    };
    const handleShow = () =>{
        setHis({...his,datetime:new Date()})
        setShow(true)
    }
    const handleDrag=(e,id)=>{
        console.log("video ID:"+id);
        e.dataTransfer.setData("videoId",id)
    }
    return (
        <div className='col'>
            <Card style={cat?{width:'12rem'} :{width:'18rem'}} className='mt-2 ms-0' draggable onDragStart={(e)=>{handleDrag(e,video?.id)}}>
                <Card.Img variant="top" src={video.image} style={{height:'250px'}} onClick={handleShow} />
                <Card.Body style={{border:'2px solid black'}}>
                    <Card.Title className='d-flex justify-content-between'>{video.caption}
                    <Button onClick={()=>{handleDelete(video.id)}} className='bg-light'>
                    <i className="fa-solid fa-trash" style={{color:'black'}} ></i>
                    </Button>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{video.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/tOo5Rn8dRaA?si=3IDBSMJdCvi7vqim&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <iframe width="560" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default VideoCard