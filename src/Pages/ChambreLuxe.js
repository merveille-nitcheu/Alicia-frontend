import React from 'react'
import TopHeader from '../Components/TopHeader'
import Booking from '../Components/Booking'
import Entete from '../Components/Entete'
import image from '../assets/img/hero1-8a.jpg'
import Footer from '../Components/Footer'
import Details from '../Components/Details'
import standard from '../assets/img/room/luxe.jpg'
import luxe from '../assets/img/room/1 (3).jpeg'
import grandluxe from '../assets/img/room/room1.jpg'

export default function ChambreLuxe() {
  return (
    <div className="container-fluid bg-white p-0">
    <TopHeader />
    <Entete image={image} titre='Détails' type="Chambres"/>
    <Details chambre="Chambre Luxe" luxe={standard} grandluxe={luxe} standard={grandluxe} prix="30 000 FCFA"/>
    <Footer/>
  </div>
  )
}
