import React from 'react'
import "./About.css"
import { Col, Container, Row } from 'react-bootstrap'
import img from './images/about.aee0f771fbfc1e7b8fa8.png';

function About() {
  return (

  
      <section id='about'>
          <Container className='about' >
              <Row className='about-row'>
            
                  <Col className='about-column' md={6}sm={12} xl={6}>
                      
                     <div className='about-img' >
                      <img src={img} alt="" />
                     </div>
                  </Col>
                  <Col className='about-column'md={6} sm={12}>
                     <div className='about-details'>
                     <h1>ABOUT</h1>
                     <p>Full Stack Developer in M E R N</p>
                      <p>I am AKHIL KRISHNAN , a passionate Developer programming and design from the future. My expertise is developing next-level websites and web applications including full frontend and backend design</p>
  <div className='btn'>                    <a className='button' href="/"> cv</a>
  </div>
  
                     </div>
                  </Col>
  
              </Row>
          </Container>
  
      </section>
  )
}

export default About