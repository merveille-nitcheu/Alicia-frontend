import React from 'react'
import slider5 from '../assets/img/slider/slider5.jpg'
import slider3 from '../assets/img/slider/slider3.jpg'
import parking from '../assets/img/slider/slider12.jpg'
import restaurant from '../assets/img/m4.jpg'
import chambres from '../assets/img/room/room02.jpg'
import reunion from '../assets/img/fin/reunion.jpg'

export default function Apropos () {
  return (
    <>
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6' style={{ minHeight: '350px' }}>
              <div
                className='position-relative h-100 wow zoomIn'
                data-wow-delay='0.1s'
                style={{
                  visibility: 'visible',
                  animationDelay: '0.1s',
                  animationName: 'zoomIn'
                }}
              >
                <img
                  className='position-absolute img-fluid w-100 h-100 rounded'
                  src={slider5}
                  style={{ objectFit: 'cover' }}
                  alt=''
                />
                <div className='bg-white border p-1 position-absolute bottom-0 end-0 mt-n4 me-n4'>
                  <div className='border py-4 px-5'>
                    <h4 style={{color:"#000000"}}>
                      Hotel Haut
                    </h4>
                    <h4 style={{color:"#000000"}}>
                      De Gamme
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <h6
                className='section-title text-start text-uppercase'
                style={{ color: '#000000' }}
              >
                A propos de Nous
              </h6>
              <h1 className='mb-4' style={{ color: '#000000' }}>
                Bienvenue à <span className='text-uppercase'>Alicia Hotel</span>
              </h1>
              <p className='mb-4'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p className='mb-4'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className='row g-3'>
                <div
                  className='col-sm-6 wow fadeIn'
                  data-wow-delay='0.1s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.1s',
                    animationName: 'fadeIn'
                  }}
                >
                  <i className='fa fa-check text-primary me-2'></i>
                  <span>Parking Gratuit</span>
                </div>
                <div
                  className='col-sm-6 wow fadeIn'
                  data-wow-delay='0.2s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.2s',
                    animationName: 'fadeIn'
                  }}
                >
                  <i className='fa fa-check text-primary me-2'></i>
                  <span>Restaurant</span>
                </div>
                <div
                  className='col-sm-6 wow fadeIn'
                  data-wow-delay='0.3s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.3s',
                    animationName: 'fadeIn'
                  }}
                >
                  <i className='fa fa-check text-primary me-2'></i>
                  <span>Wifi Gratuit</span>
                </div>
                <div
                  className='col-sm-6 wow fadeIn'
                  data-wow-delay='0.4s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.4s',
                    animationName: 'fadeIn'
                  }}
                >
                  <i className='fa fa-check text-primary me-2'></i>
                  <span>Ouvert 24/7 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='container-fluid my-5 p-0'>
        <div class='row g-0'>
          <div
            class='col-lg-3 col-md-6 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{
              visibility: 'visible',
              animationDelay: '0.1s',
              animationName: 'fadeInUp'
            }}
          >
            <div class='feature-item'>
              <div class='position-relative overflow-hidden'>
                <img
                  className='img-fluid'
                  src={reunion}
                  alt=''
                  style={{ height: '20rem' }}
                />
                <div class='feature-title'>
                  <i class='fa fa-dumbbell fa-2x text-white mb-3'></i>
                  <h5 class='text-white text-center m-0'>Salle de reunion</h5>
                </div>
                <div class='feature-text text-white text-center'>
                  <p class='m-0'>
                    Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed
                    amet sed dolor justo vero lorem. Vero amet erat eos ipsum
                    stet elitr tempor magna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class='col-lg-3 col-md-6 wow fadeInUp'
            data-wow-delay='0.3s'
            style={{
              visibility: 'visible',
              animationDelay: '0.3s',
              animationName: 'fadeInUp'
            }}
          >
            <div class='feature-item'>
              <div class='position-relative overflow-hidden'>
                <img
                  className='img-fluid'
                  src={chambres}
                  alt=''
                  style={{ height: '20rem' }}
                />
                <div class='feature-title'>
                  <i class='fa fa-hotel fa-2x text-white mb-3'></i>
                  <h5 class='text-white text-center m-0'>Chambres</h5>
                </div>
                <div class='feature-text text-white text-center'>
                  <p class='m-0'>
                    Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed
                    amet sed dolor justo vero lorem. Vero amet erat eos ipsum
                    stet elitr tempor magna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class='col-lg-3 col-md-6 wow fadeInUp'
            data-wow-delay='0.5s'
            style={{
              visibility: 'visible',
              animationDelay: '0.5s',
              animationName: 'fadeInUp'
            }}
          >
            <div class='feature-item'>
              <div class='position-relative overflow-hidden'>
                <img
                  className='img-fluid'
                  src={restaurant}
                  alt=''
                  style={{ height: '20rem', width: '25rem' }}
                />
                <div class='feature-title'>
                  <i class='fa fa-home fa-2x text-white mb-3'></i>
                  <h5 class='text-white text-center m-0'>Restaurant</h5>
                </div>
                <div class='feature-text text-white text-center'>
                  <p class='m-0'>
                    Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed
                    amet sed dolor justo vero lorem. Vero amet erat eos ipsum
                    stet elitr tempor magna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class='col-lg-3 col-md-6 wow fadeInUp'
            data-wow-delay='0.7s'
            style={{
              visibility: 'visible',
              animationDelay: '0.7s',
              animationName: 'fadeInUp'
            }}
          >
            <div class='feature-item'>
              <div class='position-relative overflow-hidden'>
                <img
                  className='img-fluid'
                  src={parking}
                  alt=''
                  style={{ height: '20rem' }}
                />
                <div class='feature-title'>
                  <i class='fa fa-swimming-pool fa-2x text-white mb-3'></i>
                  <h5 class='text-white text-center m-0'>Parking</h5>
                </div>
                <div class='feature-text text-white text-center'>
                  <p class='m-0'>
                    Clita sed diam est vero elitr ipsum. Et ipsum amet sea sed
                    amet sed dolor justo vero lorem. Vero amet erat eos ipsum
                    stet elitr tempor magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6 pt-4' style={{ minHeight: '350px' }}>
              <div
                className='position-relative h-100 wow fadeIn'
                data-wow-delay='0.1s'
                style={{
                  visibility: 'visible',
                  animationDelay: '0.1s',
                  animationName: 'fadeIn'
                }}
              >
                <img
                  className='position-absolute img-fluid w-100 h-100 rounded'
                  src={slider3}
                  style={{ objectFit: 'cover' }}
                  alt=''
                />
                <div className='bg-white border p-1 position-absolute top-0 end-0 mt-n4 me-n4'>
                  <div className='border py-4 px-5'>
                    <h1 className='display-4 text-primary mb-0'>
                      2 <span className='fs-4'style={{color:"#000000"}}>Années</span>
                    </h1>
                    <h4 style={{color:"#000000"}}>Experience</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <h6
                className='section-title text-start text-uppercase'
                style={{ color: '#000000' }}
              >
                Features
              </h6>
              <h1 className='mb-4' style={{ color: '#000000' }}>
                Pourquoi <span className='text-uppercase'>Nous</span> Choisir
              </h1>
              <p className='mb-4'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className='row g-4'>
                <div
                  className='col-12 wow fadeIn'
                  data-wow-delay='0.1s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.1s',
                    animationName: 'fadeIn'
                  }}
                >
                  <div className='d-flex'>
                    <div
                      className='flex-shrink-0 border rounded p-1'
                      style={{ width: '50px', height: '50px' }}
                    >
                      <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                        <i className='fa fa-bed text-primary'></i>
                      </div>
                    </div>
                    <div className='ps-4'>
                      <h5 style={{ color: '#000000' }}>Chambres Climatisées</h5>
                      <p className='m-0'>
                        Clita dolor sit lorem justo lorem. Diam dolore et sed
                        erat, erat est diam dolore kasd sit sed amet sit dolor
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='col-12 wow fadeIn'
                  data-wow-delay='0.2s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.1s',
                    animationName: 'fadeIn'
                  }}
                >
                  <div className='d-flex'>
                    <div
                      className='flex-shrink-0 border rounded p-1'
                      style={{ width: '50px', height: '50px' }}
                    >
                      <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                        <i className='fa fa-shield-alt text-primary'></i>
                      </div>
                    </div>
                    <div className='ps-4'>
                      <h5 style={{ color: '#000000' }}>
                        Système de haute securité
                      </h5>
                      <p className='m-0'>
                        Clita dolor sit lorem justo lorem. Diam dolore et sed
                        erat, erat est diam dolore kasd sit sed amet sit dolor
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='col-12 wow fadeIn'
                  data-wow-delay='0.3s'
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.1s',
                    animationName: 'fadeIn'
                  }}
                >
                  <div className='d-flex'>
                    <div
                      className='flex-shrink-0 border rounded p-1'
                      style={{ width: '50px', height: '50px' }}
                    >
                      <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                        <i className='fa fa-phone-alt text-primary'></i>
                      </div>
                    </div>
                    <div className='ps-4'>
                      <h5 style={{ color: '#000000' }}>
                        Assistance téléphonique 24h/24 et 7j/7
                      </h5>
                      <p className='m-0'>
                        Clita dolor sit lorem justo lorem. Diam dolore et sed
                        erat, erat est diam dolore kasd sit sed amet sit dolor
                        sed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
