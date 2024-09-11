import React from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tours/TourDetails";
import Booking from "./pages/Booking/Booking";
import Destinations from "./pages/Destinations/Destinations";
import GalleryPage from "./components/Gallery/GalleryPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/tour-details" element={<TourDetails />} />
        <Route path="/booking" element={<Booking />} />
        
        
      </Routes>
      <Footer />
    </>
  )
}

export default App