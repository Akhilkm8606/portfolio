
import React, { useState } from 'react';
import './Works.css';
import projectData from '../projectData';
import { CgPlayTrackNextO } from "react-icons/cg";


import { Card, CardBody, CardHeader, CardText, Col, Container, Row } from 'react-bootstrap';


import Service from '../services/Services';
function Works() {
    const [index, setIndex] = useState(0);
    const [showCard, setShowCard] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
  
    const nextimg = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((index + 1) % projectData.images.length);
        setFadeOut(false);
        setShowCard(true);
  
      }, 500);
    };
  
    const previmg = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((index - 1 + projectData.images.length) % projectData.images.length);
        setFadeOut(false);
        setShowCard(true);
      }, 500);
    };
  
    const handleMouseEnter = () => {
      setShowCard(true);
    }
  
    const handleMouseLeave = () => {
      setShowCard(false);
    }
  
    const currentProject = projectData.projects[index];
    const nextIndex = (index + 1) % projectData.images.length;
    const nextProject = projectData.projects[nextIndex];
    return (
      <section id='projects'>
        <Container  className='slider-container'>
       <div className='project-head'>
       <h1>projects.</h1>
        <p>These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.</p>
       </div>
          <Row className='slider-head'>
           
            <button className='button-left' onClick={previmg}><CgPlayTrackNextO /> </button>
  
            <Col className={`slider-row ${fadeOut ? 'fade-out' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index}>
              <img src={projectData.images[index]} alt="" />
  
              {showCard && currentProject && (
  
                <Card className='project-details'>
                  <CardHeader>{currentProject.name}</CardHeader>
                  <CardText>Languages :{currentProject.languages.join(', ')}</CardText>
                  <CardBody>{currentProject.description}</CardBody>
                  <a href="https://github.com/">Live Demo</a>
  
  
                </Card>
              )}
            </Col>
  
            <Col className={`slider-row ${fadeOut ? 'fade-out' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={nextIndex}>
              <img src={projectData.images[nextIndex]} alt="" />
  
              {showCard && nextProject && (
                <Card className='project-details'>
                  <CardHeader>{nextProject.name}</CardHeader>
                  <CardText>Languages : {nextProject.languages.join(', ')}</CardText>
                  <CardBody>{nextProject.description}</CardBody>
                  <a href="https://github.com/">Live Demo</a>
  
                </Card>
              )}
            </Col>
  
            <button className='button-right' onClick={nextimg}><CgPlayTrackNextO /></button>
          </Row>
          <Service/>

        </Container>
      </section>
  
    );
  }
  

export default Works