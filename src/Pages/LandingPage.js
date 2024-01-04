import React from 'react'
import Header from '../Components/Header';
import About from '../Components/About';
import Chambres from '../Components/Chambres';
import Baniere from '../Components/Baniere';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import Galerie from '../Components/Galerie';
import TopHeader from '../Components/TopHeader';
import Booking from '../Components/Booking';

export default function LandingPage() {
  return (
    <div className="container-fluid bg-white p-0">
        {/* <div id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                </div>
                <span className="sr-only text-primary ms-3">Alicia Hotel</span>
                
        </div> */}
        <TopHeader/>
        <Header/>
        <Booking/>
        <About/>
        <Chambres/>
        <Baniere/>
        <Services/>
        <Footer/>
      
    </div>
  )
}
