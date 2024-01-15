import React from 'react'
import slider5 from '../assets/img/Photos/1.jpeg'
import slider3 from '../assets/img/Photos/5.jpeg'
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
                <div
                  className=' border p-1 position-absolute bottom-0 end-0 mt-n4 me-n4'
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                >
                  <div className='border py-4 px-5'>
                    <h4 style={{ color: '#000000' }}>Hotel Haut</h4>
                    <h4 style={{ color: '#000000' }}>De Gamme</h4>
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
              ALICIA HOTEL propose un hébergement confortable pour un séjour professionnel ou familial avec une connexion internet haut débit, un restaurant-bar offrant une variété de plats, une salle de réunion pour vos événements professionnels, un parking sécurisé, un personnel accueillant et un service de sécurité professionnel.
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
      <div className='container-fluid mt-5 pt-5'>
        <div className='container'>
          <div className='row g-3'>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='feature-item'>
                <div className='position-relative overflow-hidden'>
                  <div
                    className='card'
                    style={{ backgroundImage: `url(${reunion})` }}
                  >
                    <div className='card-content'>
                      <h2 className='card-title' style={{ color: '#ffffff' }}>
                        Salle de reunion
                      </h2>
                      <p className='card-body'>
                      Une salle de réunion d'une capacité de 30 places modulables et adaptées pour des séminaires en visioconférence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
              style={{
                visibility: 'visible',
                animationDelay: '0.3s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='feature-item'>
                <div className='position-relative overflow-hidden'>
                <div
                    className='card'
                    style={{ backgroundImage: `url(${chambres})` }}
                  >
                    <div className='card-content'>
                      <h2 className='card-title' style={{ color: '#ffffff' }}>
                       Chambres
                      </h2>
                      <p className='card-body'>
                      Alicia Hotel vous offre des chambres climatisées spacieuses et confortables pour un sejour inoubliable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.5s'
              style={{
                visibility: 'visible',
                animationDelay: '0.5s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='feature-item'>
                <div className='position-relative overflow-hidden'>
                <div
                    className='card'
                    style={{ backgroundImage: `url(${restaurant})` }}
                  >
                    <div className='card-content'>
                      <h2 className='card-title' style={{ color: '#ffffff' }}>
                       Restaurant
                      </h2>
                      <p className='card-body'>
                      Un restaurant-bar offrant un petit déjeuner continental ainsi qu’une diversité de plats africains et européens.
                      </p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
              style={{
                visibility: 'visible',
                animationDelay: '0.7s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='feature-item'>
                <div className='position-relative overflow-hidden'>
                <div
                    className='card'
                    style={{ backgroundImage: `url(${parking})` }}
                  >
                    <div className='card-content'>
                      <h2 className='card-title' style={{ color: '#ffffff' }}>
                       Parking
                      </h2>
                      <p className='card-body'>
                      Ouverte 24h/ 24, Alicia hôtel dispose d’un parking de 20 véhicules extérieur et intérieur hautement sécurisé.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-xxl mt-5 py-5'>
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
                <div
                  className='border p-1 position-absolute top-0 end-0 mt-n4 me-n4'
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                >
                  <div className='border py-4 px-5'>
                    <h1 className='display-4 text-primary mb-0'>
                      2{' '}
                      <span className='fs-4' style={{ color: '#000000' }}>
                        Années
                      </span>
                    </h1>
                    <h4 style={{ color: '#000000' }}>Experience</h4>
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
                Pourquoi Nous Choisir
              </h1>
              <p className='mb-4'>
              ALICIA HOTEL propose un hébergement confortable pour un séjour professionnel ou familial avec une connexion internet haut débit, un restaurant-bar offrant une variété de plats, une salle de réunion pour vos événements professionnels, un parking sécurisé, un personnel accueillant et un service de sécurité professionnel.
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
                      Alicia Hotel vous offre des chambres climatisées pour un sejour inoubliable.
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
                      Ouverte 24h/ 24, Alicia hôtel dispose d’un parking de 20 véhicules extérieur et intérieur hautement sécurisé,
                      et un service de sécurité professionnel pour assurer votre séjour.
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
                      Nous mettons à votre disposition un personnel dynamique et accueillant disponible 24h/24,
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
