import React, { useState } from 'react';
import "./contact.css"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Container, Row } from 'react-bootstrap'
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { useNavigate } from "react-router-dom"

function Contact() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/contact", {
        fullname,
        email,
        subject,
        message,
      })
      // navigate("/")
      if (response && response.data) {
        if (response.data.success) {
          toast.success(response.data.message, {
            autoClose: 3000
          });
          console.log(response.data);
          await new Promise((resolve) => {
            setTimeout(resolve, 1000)
          })
          
        } else {
          toast.error(response.data.msg);
        }
        
      }

      console.log(response.data); // Log the response from the server
    } catch (error) {
     // Handle errors from the API request
     console.error("Error during registration:", error);
     toast.error(error.response.data.message);
    }
  }

  return (
    <section id='contact'>
      <Container className='contact-container'>
        <div className='contact-head'>
          <p>Let's Connect and Chat!____________</p>
          <h1>CONTACT ME .</h1>
        </div>
        <Row className='contact-Row'>
          <Col className='input-col' md={6}>
            <div className='input'>
              <p>Connect with us,<br /> let’s make some magic.</p>
              <span>
                <input id='fullname' type="text" placeholder='full Name' value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </span>
              <span>
                <input id='email' type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </span>
              <span>
                <input id='subject' type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
              </span>
              <span>
                <textarea id='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </span>
              <div className='btn'>
                <button onClick={handleSubmit}>send</button>
              </div>
            </div>
          </Col>
          <Col className='img-col' md={6}>
            <div className='name'>
              <span className='location'>Your Location</span>
            </div>
            <div>
              <div className='img'>
                <a href="mailto:akhilkrishnanm860645@gmail.com">
                  <MdEmail />
                </a>
              </div>
              <div className='img'>
                <a href="tel:+1234567890">
                  <MdCall />
                </a>
              </div>
              <div className='img'>
                <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer/>
    </section>
  );
}

export default Contact;
