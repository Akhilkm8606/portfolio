import React from 'react'
import "./Services.css"
import { Col, Container, Row } from 'react-bootstrap'
import fs from './images/3964906.jpg'
import ui from './images/5071196.jpg'
import fd from './images/4428861.jpg'
import bd from './images/4421964.jpg'
import { FaGitAlt, FaGithub, } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { FaSlack } from "react-icons/fa";


function Service() {
  return (
    <section id='services-section'>
      <Container className='services-container'>
      <h1>My Services</h1>
        <Row className='services-row'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus, quo voluptate nisi quaerat, molestias est blanditiis excepturi numquam repellendus voluptatem saepe quos, harum minus sed eius dolorum delectus voluptatibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iusto, dolorem esse illo vel, accusamus rerum eligendi voluptates atque inventore dolor nesciunt quod quasi. Rem officiis sapiente sit voluptates maxime.
        </p>
          <Col className='services-column'  >
          <div className='services'>
           <img src= {fd} alt="" />
            
           <h3>Frontend Development</h3>
          </div>
          <div className='services'>
          <img src= {bd} alt="" />
            
           <h3>Backend Development</h3>
          </div>
          <div className='services'>
          <img src= {fs} alt="" />
           <h3>Full Stack Development</h3>
          </div>
          
          <div className='services'>
          <img src= {ui} alt="" />
           <h3>UI/UX Designing</h3>
          </div>
          
         
          </Col>
        
        
        </Row>
        <Row className='tools-row'>
        <h1>Tools</h1>
          <Col className='tools-column'   >
         
          
          <div className='tools'  >
            <div className='column'><span>
                <FaGithub/>
                <h4>Git Hub</h4>
                </span>
              <span>
                <TbBrandVscode/>
                <h4>Vs Code</h4>
                </span>
              <span>
                <SiPostman/>
                <h4>Post Man</h4>
                </span></div>
            <div className='column'>
            <span>  
              <FaGitAlt/>
                <h4>Git    </h4>
                </span>
              <span>
                <BiLogoNetlify/>
                <h4>Netlify</h4>
                </span>
              <span>
                <FaSlack/>
                <h4>Slack</h4>
                </span>
              
        
            </div>
              
              
          </div>
          
         
          </Col>
        </Row>
        
      </Container>
    </section>
  )
}

export default Service