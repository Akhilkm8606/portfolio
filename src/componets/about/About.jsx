import React from 'react'
import "./About.css"
import { Col, Container, Row } from 'react-bootstrap'
import img from '../images/cartoon-hacker-boy_70172-3328.jpg';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbTriangleFilled } from "react-icons/tb";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
function About() {
    return (


        <section id='about'>
            <Container className='about' >

                <h1 className='about-head'>ABOUT.</h1>
                <Row className='about-row'>

                    <Col className='about-column' md={6} sm={12} xl={6}>

                        <div className='about-img' >
                            <img src={img} alt="" />
                        </div>
                    </Col>
                    <Col className='about-column-1' md={6} sm={12}>
                        <div className='about-details'>

                            <p className='title'>Full Stack Developer in M E R N</p>
                            <p>I am AKHIL KRISHNAN , a passionate Developer programming and design from the future. My expertise is developing next-level websites and web applications including full frontend and backend design</p>
                            <div className='btn'>
                                <a className='button' href="/"> cv</a>
                            </div>

                        </div>
                    </Col>

                </Row>
                <Row className='experience-row'>
                    <p>
                        WHAT I'VE DONE SO FAR ________________
                    </p>
                    <h1>Work Experience</h1>
                    <div className='experience-section'>
                        <Col className='experiences'>
                            <div className="left">
                                <span>
                                    <div className='exp'>
                                        <h2>Lorem ipsum dolor</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto ea at quas non laborum vero maiores provident. Voluptates incidunt animi excepturi mollitia corporis reiciendis voluptatum nisi harum quisquam sequi.</p>
                                        <IoMdArrowDropright className="icon-right" /></div>
                                    <div className='company-dtls'>
                                    <div><BiSolidBuildingHouse /></div>
                                        <div><CiLocationOn /></div>
                                        <div><TbTriangleFilled /></div>
                                    </div>
                                </span>
                            </div>
                            <div className="left">
                                <span>
                                    <div className='exp'>
                                        <h2>Lorem ipsum dolor</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto ea at quas non laborum vero maiores provident. Voluptates incidunt animi excepturi mollitia corporis reiciendis voluptatum nisi harum quisquam sequi.</p>

                                        <IoMdArrowDropright className="icon-right" /></div>
                                    <div className='company-dtls'>
                                        <div><BiSolidBuildingHouse /></div>
                                        <div><CiLocationOn /></div>
                                        <div><TbTriangleFilled /></div>
                                    </div>
                                </span>
                            </div>
                            <div className="left">
                                <span>
                                    <div className='exp'>
                                        <h2>Lorem ipsum dolor</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto ea at quas non laborum vero maiores provident. Voluptates incidunt animi excepturi mollitia corporis reiciendis voluptatum nisi harum quisquam sequi.</p>

                                        <IoMdArrowDropright className="icon-right" /></div>
                                    <div className='company-dtls'>
                                    <div><BiSolidBuildingHouse /></div>
                                        <div><CiLocationOn /></div>
                                        <div><TbTriangleFilled /></div>
                                    </div>
                                </span>
                            </div>

                        </Col>
                        <span className='circle'>
                            <span><TbTriangleFilled /></span>
                            <span><TbTriangleFilled /></span>
                            <span><TbTriangleFilled /></span>
                            <span><TbTriangleFilled /></span>
                            <span><TbTriangleFilled /></span>
                        </span>
                        <Col className='experiences'>
                            <div className="right">
                                <span>
                                    <div className='exp'><IoMdArrowDropleft className="icon-left" />
                                        <h2>Lorem ipsum dolor</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat architecto ea at quas non laborum vero maiores provident. Voluptates incidunt animi excepturi mollitia corporis reiciendis voluptatum nisi harum quisquam sequi.</p>

                                    </div>
                                    <div className='company-dtls'>
                                    <div><BiSolidBuildingHouse /></div>
                                        <div><CiLocationOn /></div>
                                        <div><TbTriangleFilled /></div>
                                    </div>

                                </span>
                            </div>
                            <div className="right">
                                <span className='resume'>
                                    <div className='exp' id='exp-resume'><IoMdArrowDropleft className="icon-left" />My Resume <a href="/path/to/your/resume.pdf" download>
                                        <MdOutlineFileDownload className='download-btn' />
                                    </a></div>
                                </span>
                            </div>
                        </Col>
                    </div>

                </Row>
                <Row className='connect-link'>
                    <Col className='connect-col'>
                        <div>
                            Start a project
                        </div>
                        <div>
                            <p>            Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                            </p>
                        </div>
                        <div>
                            <a href="/contact">Let's do this</a>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>
    )
}

export default About