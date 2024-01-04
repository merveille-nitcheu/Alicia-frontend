import React from 'react'
import TopHeader from '../Components/TopHeader'
import Booking from '../Components/Booking'
import Entete from '../Components/Entete'
import image from '../assets/img/hero1-8a.jpg'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

export default function ContactPage() {
  return (
    <div className="container-fluid bg-white p-0">
    <TopHeader />
    <Entete image={image} titre='Contact' type="Contact" />
    <Booking />
    <Contact/>
    <Footer/>
  </div>
  )
}


