import React from 'react'
import TopHeader from '../Components/TopHeader'
import Booking from '../Components/Booking'
import Entete from '../Components/Entete'
import image from '../assets/img/hero1-8a.jpg'
import NosChambres from '../Components/NosChambres'
import Footer from '../Components/Footer'

export default function Chambres() {
  return (
    <div className="container-fluid bg-white p-0">
        <TopHeader/>
        <Entete image={image} titre="chambres" type="Chambres"/>
        <Booking/>
        <NosChambres/>
        <Footer/>
      
    </div>
  )
}
