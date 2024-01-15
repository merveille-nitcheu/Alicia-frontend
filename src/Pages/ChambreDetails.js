import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosInstance'
import TopHeader from '../Components/TopHeader'
import Booking from '../Components/Booking'
import Entete from '../Components/Entete'
import image from '../assets/img/hero1-8a.jpg'
import Footer from '../Components/Footer'
import Details from '../Components/Details'
import standard from '../assets/img/room/standard.jpg'
import luxe from '../assets/img/room/1 (4).jpeg'
import grandluxe from '../assets/img/room/1 (3).jpeg'
import { useParams } from 'react-router-dom';

export default function ChambreDetails() {
    const [Chambresliste, setChambresliste] = React.useState([])
    const [ChambresDetails, setChambresDetails] = React.useState([])
    const roomCode = useParams()
    console.log(roomCode.code)
    useEffect(() => {
        axiosInstance
          .get('rest/room-list')
          .then(response => {
            const data = response.data
            setChambresliste(data)
            
          })
    
          .catch(error => {
            console.log(error)
          })
      }, [Chambresliste])


      useEffect(() => {
        const filteredDetailsChambres = Chambresliste.filter(
          chambre => chambre.code === roomCode.code
        )
        setChambresDetails(filteredDetailsChambres[0])
        
      }, [ChambresDetails])


  return (
    <div className="container-fluid bg-white p-0">
    <TopHeader />
    <Entete image={image} titre='Détails' type="Chambres"/>
    <Details chambre={ChambresDetails?.Intitule} luxe={standard} grandluxe={luxe} standard={grandluxe} prix={ChambresDetails?.prixNuitee+" Fcfa"}  />
    <Footer/>
  </div>
  )
}
