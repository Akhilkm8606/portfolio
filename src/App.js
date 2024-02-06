import React from 'react';
import { BrowserRouter , Routes,Route } from "react-router-dom";
import './App.css';

import About from './componets/About';
import Contact from './componets/Contact';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
Footer

function App() {
  return (
    <BrowserRouter>
<Navbar/>
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/contact" element={<Contact/>} />
           </Routes>
     <Footer/>
  
  </BrowserRouter>
  );
}

export default App;
