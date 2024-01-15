import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Categories from './Categories'
import ChambresDispo from './ChambresDispo'

export default function NosChambres () {
    const navigate = useNavigate()
    const handleClick = (roomCode) => {
      console.log("code",roomCode)
      navigate(`/chambres/details/${roomCode}`)

    }
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-uppercase" style={{color:'#000000'}}>Chambres</h6>
            <h1 className="mb-5" style={{color:'#000000'}}>Nos chambres disponibles</h1>
        </div>
        
            <ChambresDispo onClick={handleClick}/>
          

          {/* <div className='col-lg-4'>
           <Categories/>

            <div
              className='border p-1 wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='border p-4'>
                <h4 className='mb-4'>Support client</h4>
                <p>
                  Lorem sed erat elitr magna magna labore duo elitr ipsum duo.
                  Et sed duo rebum lorem sed stet sed
                </p>
                <div className='bg-primary text-center p-3' style={{borderRadius:'0.6rem'}}>
                  <span className='text-white m-0'>+237 699 71 11 89 | 233 47 18 36</span>
                </div>
              </div>
            </div>
          </div> */}
        
      </div>
    </div>
  )
}
