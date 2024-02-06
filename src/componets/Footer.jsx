import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <section id='footer'>
            <Container className='footer-container' >
                <Row className='footer-row'>
                    <Col className='footer-column'>
                        <h3> Akhil KRISHNAN M</h3>
                        <ul className='menu-list'>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skill">Skill  </a></li>
                            <li><a href="#projects">Project</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul className='social-icon'>
                            <li> 
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            </li>

                            <li> 
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            </li>
                            <li> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
</li>
                            <li> <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                            </li>
                        </ul>
                        <p>@ 2024 Akhil KRISHNAN M. All Rights Resrved.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer