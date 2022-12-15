import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Features from './Pages/Features';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header';


const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Features" element={<Features />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;

