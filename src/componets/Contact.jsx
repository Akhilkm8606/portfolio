import React from 'react';
import  "./contact.css"
import { Col, Container, Row } from 'react-bootstrap'
import img from './images/8026383.jpg'
function Contact() {
  return (
    <section id='contact'>
 
      <Container className='contact-container' >
    <h1>contact</h1>
        <Row className='contact-Row' >
        
      
      <Col  className='input-col' md={6}>
        <div className='input'>
           
    <p>Connect with us,<br /> let’s make some magic.</p>
    <span>
          <input type="text" placeholder='your Name'  />
          </span>

    
         
          <span>
          <input type="email" placeholder='email' />
          </span>
          <span>
          <input type="text" placeholder='subject' />
          </span>
          <span>
              <textarea placeholder='Message'></textarea>
            </span>
           <div className='btn'>
           <button>send</button> 
           </div>
            </div>
         
          </Col>
          <Col  className='img-col'   md={6}  >
            <div className='img'> 
           

            <img src={img} alt="" /> 

            </div>
          </Col>
         

        </Row>
      </Container>
    </section>
  );
}

export default Contact;
