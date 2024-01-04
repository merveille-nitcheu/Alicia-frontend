import React from 'react'
import TopHeader from '../Components/TopHeader'
import Booking from '../Components/Booking'
import Entete from '../Components/Entete'
import image from '../assets/img/hero1-8a.jpg'
import Footer from '../Components/Footer'
import Details from '../Components/Details'

export default function ChambreDetail () {
  return (
    <div className="container-fluid bg-white p-0">
      <TopHeader />
      <Entete image={image} titre='Détails' type="Chambres"/>
      <Details/>
      <Footer/>
    </div>
  )
}
