import React from 'react';
import { BrowserRouter , Routes,Route } from "react-router-dom";
import './App.css';

import About from './componets/About';
import Contact from './componets/Contact';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
  import Footer from './componets/Footer';
import Works from './componets/Works';
import Services from './componets/Services';
function App() {
  
  return (
    <BrowserRouter>
<Navbar/>
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/services" element={<Services/>} />
    <Route  path="/contact" element={<Contact/>} />
    <Route  path="/work" element={<Works/>} />
           </Routes>
     <Footer/>
  
  </BrowserRouter>
  );
}

export default App;
