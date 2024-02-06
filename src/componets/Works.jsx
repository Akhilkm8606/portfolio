
import React, { useState } from 'react';
import './Works.css';
import projectData from './projectData';
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { Card, CardBody, CardHeader, CardText, Col, Container, Row } from 'react-bootstrap';

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
        <h1>projects</h1>
          <Row className='slider-head'>
           
            <button className='button-left' onClick={previmg}><GrCaretPrevious /> </button>
  
            <Col className={`slider-row ${fadeOut ? 'fade-out' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index}>
              <img src={projectData.images[index]} alt="" />
  
              {showCard && currentProject && (
  
                <Card className='project-details'>
                  <CardHeader>{currentProject.name}</CardHeader>
                  <CardText>Languages :{currentProject.languages.join(', ')}</CardText>
                  <CardBody>{currentProject.description}</CardBody>
                  <a href="#">Live Demo</a>
  
  
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
                  <a href="#">Live Demo</a>
  
                </Card>
              )}
            </Col>
  
            <button className='button-right' onClick={nextimg}><GrCaretNext /></button>
          </Row>
        </Container>
      </section>
    );
  }
  

export default Works