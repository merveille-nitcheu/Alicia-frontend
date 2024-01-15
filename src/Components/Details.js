import React from 'react'
import Reservation from './Reservation'
import Categories from './Categories'
import TitreReservation from './TitreReservation'

export default function Details ({chambre,luxe,grandluxe,standard,prix}) {
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div class='text-center wow fadeInUp ' data-wow-delay='0.1s'>
          <h6
            class='section-title text-center text-uppercase'
            style={{ color: '#000000' }}
          >
            Chambre
          </h6>
          <h1 class='mb-5' style={{ color: '#000000' }}>
            Détails sur la chambre
          </h1>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-7'>
            <div
              id='room-carousel'
              className='carousel slide mb-5 wow fadeIn'
              data-bs-ride='carousel'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeIn'
              }}
            >
              <div className='carousel-inner'>
                <div className='carousel-item'>
                  <img className='w-100' src={luxe} alt='Image' />
                </div>
                <div className='carousel-item active'>
                  <img className='w-100' src={grandluxe} alt='Image' />
                </div>
                <div className='carousel-item '>
                  <img className='w-100' src={standard} alt='Image' />
                </div>
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#room-carousel'
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#room-carousel'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
            <div className='d-flex align-items-center mb-4'>
              <h1 className='mb-0' style={{ color: '#000000' }}>
                {chambre}
              </h1>
              <div className='ps-3'>
                <small className='fa fa-star text-primary'></small>
                <small className='fa fa-star text-primary'></small>
                
              </div>
            </div>
            <div className='d-flex flex-wrap pb-4 m-n1'>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-bed text-primary me-2'></i>2 Personnes
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-wifi text-primary me-2'></i>Wifi
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-tv text-primary me-2'></i>TV
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-user-cog text-primary me-2'></i>{prix}
              </small>
              
            </div>
            <p>
            Nous vous proposons les chambres Standard, Luxe, et Grand luxe confortables et spacieuses toutes connectées au réseau internet haut débit.
            </p>
          </div>

          <div className='col-lg-5'>
            <div
              className='bg-light mb-5 wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <TitreReservation />
              <Reservation />
            </div>

            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
