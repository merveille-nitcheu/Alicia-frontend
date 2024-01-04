import React from 'react'
import TopHeader from '../Components/TopHeader'
import Entete from '../Components/Entete'
import image from '../assets/img/hero1-8a.jpg'
import NosChambres from '../Components/NosChambres'
import Footer from '../Components/Footer'
import ProcessReservation from '../Components/ProcessReservation'

export default function ReservationPage() {
  return (
    <div className="container-fluid bg-white p-0">
    <TopHeader/>
    <Entete image={image} titre="Reservation" type="Reservation"/>
    <ProcessReservation/>
    <Footer/>
  
</div>
  )
}
