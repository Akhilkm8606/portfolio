import React from 'react';
import { BrowserRouter , Routes,Route } from "react-router-dom";
import './App.css';

import About from './componets/about/About';
import Contact from './componets/contact/Contact';
import Home from './componets/home/Home';
import Navbar from './componets/navbar/Navbar';
  import Footer from './componets/footer/Footer';
import Works from './componets/work/Works';
import Services from './componets/services/Services';
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
