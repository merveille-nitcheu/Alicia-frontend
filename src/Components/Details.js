import React from 'react'
import standard from '../assets/img/room/standard.jpg'
import luxe from '../assets/img/room/luxe.jpg'
import grandluxe from '../assets/img/room/grandluxe.jpg'
import carrousel from '../assets/img/carousel-1.jpg'
import Reservation from './Reservation'
import Categories from './Categories'
import TitreReservation from './TitreReservation'

export default function Details () {
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div class='text-center wow fadeInUp' data-wow-delay='0.1s'>
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
        <div className='row g-5'>
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
                  <img className='w-100' src={carrousel} alt='Image' />
                </div>
                <div className='carousel-item active'>
                  <img className='w-100' src={carrousel} alt='Image' />
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
                Chambre Standard
              </h1>
              <div className='ps-3'>
                <small className='fa fa-star text-primary'></small>
                <small className='fa fa-star text-primary'></small>
                <small className='fa fa-star text-primary'></small>
                <small className='fa fa-star text-primary'></small>
                <small className='fa fa-star text-primary'></small>
              </div>
            </div>
            <div className='d-flex flex-wrap pb-4 m-n1'>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-bed text-primary me-2'></i>3 Bed
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-bath text-primary me-2'></i>2 Bath
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-wifi text-primary me-2'></i>Wifi
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-tv text-primary me-2'></i>TV
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-fan text-primary me-2'></i>AC
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-user-cog text-primary me-2'></i>Laundry
              </small>
              <small className='bg-light rounded py-1 px-3 m-1'>
                <i className='fa fa-utensils text-primary me-2'></i>Dinner
              </small>
            </div>
            <p>
              Sadipscing labore amet rebum est et justo gubergren. Et eirmod
              ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
              rebum et lorem magna kasd, stet amet magna accusam consetetur
              eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
              Ipsum sit gubergren dolores et, consetetur justo invidunt at et
              aliquyam ut et vero clita. Diam sea sea no sed dolores diam
              nonumy, gubergren sit stet no diam kasd vero.
            </p>
            <p className='mb-5'>
              Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
              aliquyam dolores vero stet consetetur elitr takimata rebum
              sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
              sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
              sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
              clita lorem sit vero amet amet est dolor elitr, stet et no diam
              sit. Dolor erat justo dolore sit invidunt.
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
