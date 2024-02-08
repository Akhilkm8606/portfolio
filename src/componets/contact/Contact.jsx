import React from 'react';
import  "./contact.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaXTwitter } from "react-icons/fa6";

import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
function Contact() {
  return (
    <section id='contact'>
 
      <Container className='contact-container' >
   <div className='contact-head'>
    <p>Let's Connect and Chat!____________</p>
   <h1>CONTACT ME .</h1>
   </div>
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
        <div className='name'>

  <span className='location'>Your Location</span>
</div>

           <div>
           <div className='img'>
  <a href="mailto:akhilkrishnanm860645@gmail.com">
    <TfiEmail/>
   
  </a>
</div>

<div className='img'>
  <a href="tel:+1234567890">
  <MdCall/>

    
  </a>
</div>


<div className='img'>
<a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
<FaXTwitter/>

      </a> 
    
</div>
           </div>
          </Col>
     
         
         

        </Row>
      </Container>
      
    </section>
  );
}

export default Contact;
