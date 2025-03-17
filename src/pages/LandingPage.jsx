import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      {/* first section */}
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
        <Row>
          <Col>
              <h3 className='textStyle'>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h3>
              <p className='textStyle mt-5'style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque doloribus ullam odit id. Tenetur, culpa velit? Ab dolores, consequatur beatae ex, ut numquam porro nulla necessitatibus natus tenetur eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit aliquam repellendus! Blanditiis a hic, iusto perspiciatis itaque molestiae ullam deserunt quaerat ea eligendi aut harum inventore. Reprehenderit, quo minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum, ratione sint harum error doloremque sit quasi velit modi pariatur debitis voluptatibus ipsam vitae quod nulla esse. Nostrum, praesentium harum!</p>
              <Link to={'/home'}>
              <button className='btn btn-warning mt-4'>GET STARTED <i class="fa-solid fa-arrow-right ms-2 fa-beat"></i></button>
              </Link>
              
          </Col>
          <Col>
              <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} className='ms-5'/>
          </Col>
        </Row>
      </Container>
       {/* second section */}
      <div className='container'>
          <h3 className='textStyle'>FEATURES</h3>
          <div className='d-flex align-items-center justify-content-evenly mt-5'>
          <Card className='textStyle border' style={{ width: '18rem',backgroundColor:'black' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
            <Card.Title>ADD VIDEOS</Card.Title>
             <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={'/home'}>
            <Button variant="primary">ADD VIDEO</Button>
            </Link>
           
          </Card.Body>
         </Card>
         <Card className='textStyle border' style={{ width: '18rem',backgroundColor:'black' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
            <Card.Title>VIEW VIDEOS</Card.Title>
             <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={'/home'}>
            <Button variant="primary">VIEW VIDEO</Button>
            </Link>
            
          </Card.Body>
         </Card>
         <Card className='textStyle border' style={{ width: '18rem',backgroundColor:'black' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
            <Card.Title>WATCH HISTORY</Card.Title>
             <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={'/watch'}>
            <Button variant="primary">VIEW HISTORY</Button>
            </Link>
            
          </Card.Body>
         </Card>
          </div>
      </div>
      {/* third section */}
      <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col>
              <h3 className='textStyle'>SIMPLE AND POWERFUL</h3>
               <p className='textStyle'> <span className='fs-5 fw-bolder'>PLAY EVERYTHINK</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium alias ducimus eveniet blanditiis eos architecto cumque. Non sit natus ab molestias, nam eum explicabo vero quidem praesentium rem amet.</p>
               <p className='textStyle'> <span className='fs-5 fw-bolder'>PLAY EVERYTHINK</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium alias ducimus eveniet blanditiis eos architecto cumque. Non sit natus ab molestias, nam eum explicabo vero quidem praesentium rem amet.</p>
               <p className='textStyle'> <span className='fs-5 fw-bolder'>PLAY EVERYTHINK</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium alias ducimus eveniet blanditiis eos architecto cumque. Non sit natus ab molestias, nam eum explicabo vero quidem praesentium rem amet.</p>
          </Col>
          <Col>
             <div>
             <iframe width="100%" height="400" src="https://www.youtube.com/embed/Qsyzi89H9jA?si=hOfpBxGWBgr8MLqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LandingPage