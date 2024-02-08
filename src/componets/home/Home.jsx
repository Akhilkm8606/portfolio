import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import img from '../images/person-looking-futuristic-mystical-other-worldly-sky.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import "./Home.css"

function Home() {
    const title = 'AKHIL KRISHNAN M';
    const subtitle = 'web developer';
  
    return (
      <section id='hero'>
        <Container>
          <Row className='hero-row'>
            <Col className='hero-column' md={8}>
              <div className='hero-content'>
                <h1 className='hero-title'>
                HI, I'M{' '}
                  <Typewriter
                    options={{
                      strings: [title],
                      autoStart: true,
                      loop: true,
                      typeSpeed: 50,
                      wrapperClassName: 'typed-text',                    
                    }}
                  />
                </h1>
               

<div className='hero-subtitle'>
  I am a {' '}
  <Typewriter
    options={{
      strings: [subtitle],
      autoStart: true,
      loop: true,
      wrapperClassName: 'typed-subtitle',
    }}
  />
</div>
<div className='hero-description'>
  Welcome to my portfolio! I create elegant and responsive web applications using React.
</div>

              </div>
            </Col>
            <Col md={4} className='hero-column-1'>
              <div className='hero-img'>
                <div className='img-container'>
                  <img src={img} alt='' />
                  <div className='icon-container'>
                    <a className='icon' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  </div>
                  <div className='icon-container_1'>
                    <a className='icon' href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  </div>
                  <div className='icon-container_2'>
                    <a className='icon' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                  </div>
                  <div className='icon-container_3'>
                    <a className='icon' href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  
  export default Home;
  
