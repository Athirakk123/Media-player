import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Landing() {
  return (
    <>
    <div>
    <div className='w-100 d-flex justify-content-center align-items-center p-5' style={{height:'80vh'}}>
      <div className='row'>
        <div className='col shadow'>
          <h2>Media Player</h2>
        <p style={{textAlign:'justify'}}>
          A media player is a software or a hardware device that is used to play audio and video files.
           It can play digital media files from a storage device, a disc, or streamed from the internet. Examples of media players include software applications like Windows Media Player, VLC Media Player, or hardware devices like DVD players and Smart TVs.</p>
     <Link className='btn btn-success'>Explore</Link>
     
      </div>
<div className='col'>
  <img className='img-fluid rounded shadow' src="https://images.shiksha.com/mediadata/images/articles/1702995721phpXQfap9.jpeg" alt="" />
</div>
</div>
</div>
    </div>
    <div className='mt-5'>
      <h2 className='text-center'>Features</h2>
      <div className='d-flex flex-row justify-content-between p-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'300px'}}src="https://cdn.dribbble.com/users/1028589/screenshots/3155170/jaaqobvideoplay-2dribbble_3.gif" />
      <Card.Body>
        <Card.Title>Play videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'300px'}}src="https://cdn.dribbble.com/users/1365306/screenshots/3371942/file-upload.gif" />
      <Card.Body>
        <Card.Title>Upload videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{height:'300px'}}src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>


      </div>

    </div>

    <div className='mt-3 p-5'>
      <h2 className='text-center'>Why Media Player?</h2>
      <div className='d-flex mt-2 flex-row justify-content-center align-items-center'>
        <div>
          <h4 className='java features'></h4>
          <p style={{textAlign:'justify', padding:'10px'}}>
          They allow users to organize their multimedia collection, play songs and movies, rip CD tracks to MP3 and other audio formats, burn CDs, listen to Internet radio, download content from online music stores and stream content from the Internet.
          </p>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hd3hO0v52uE?si=_-mpNXawZiNrF3nV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing