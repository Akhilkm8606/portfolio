import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Skills/Skill.css"
import { SiHtml5 ,SiCss3,SiMongodb,SiJavascript,SiBootstrap} from "react-icons/si";
import { FaReact,FaNodeJs , FaSquareGithub} from "react-icons/fa6";
function Skill() {
  return (
    <Container id='skills'>
       <div className="skill-head">
       <h3>MY SKILLS</h3>
            <h1>Technologies.</h1>
       </div>
        <Row className="skill-row" >
            <Col className="skill-col">
            <div className='tec'>
                <span><SiHtml5/></span>
                <span><SiCss3/></span>
                <span><SiJavascript/></span>
                <span><SiBootstrap/></span>
                
               
                </div>
            <div className='tec'>

            <span><FaReact/></span>
            <span><FaNodeJs/></span>
            <span><SiMongodb/></span>
            <span><FaSquareGithub/></span>
                
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Skill