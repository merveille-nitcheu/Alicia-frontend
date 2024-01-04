import React from 'react'

export default function Services () {
  return (
    <div className='container-fluid py-5'>
      <div className='container'>
        <div
          className='text-center wow fadeInUp'
          data-wow-delay='0.1s'
          style={{
            visibility: 'visible',
            animationDelay: '0.1s',
            animationName: 'fadeInUp'
          }}
        >
          <h6 className='section-title text-center text-uppercase'style={{color:'#000000'}}>
            Nos services
          </h6>
          <h1 className='mb-5' style={{color:'#000000'}}>
            Explorez Nos{' '}
            <span className='text-uppercase'>Services</span>
          </h1>
        </div>
        <div className='row g-4'>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{
              visibility: 'visible',
              animationDelay: '0.1s',
              animationName: 'fadeInUp'
            }}
          >
            <a
              className='service-item rounded border-bottom border-5 border-primary'
              href=''
            >
              <div className='service-icon bg-transparent border rounded mb-4 p-1'>
                <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                  <i className='fa fa-hotel fa-2x text-primary'></i>
                </div>
              </div>
              <h5 className='mb-3'>Chambres Climatisées</h5>
              <p className='text-body mb-0'>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-delay='0.2s'
            style={{
              visibility: 'visible',
              animationDelay: '0.2s',
              animationName: 'fadeInUp'
            }}
          >
            <a
              className='service-item rounded border-bottom border-5 border-primary'
              href=''
            >
              <div className='service-icon bg-transparent border rounded mb-4 p-1'>
                <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                  <i className='fa fa-utensils fa-2x text-primary'></i>
                </div>
              </div>
              <h5 className='mb-3'>Restaurant</h5>
              <p className='text-body mb-0'>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-delay='0.3s'
            style={{
              visibility: 'visible',
              animationDelay: '0.3s',
              animationName: 'fadeInUp'
            }}
          >
            <a
              className='service-item rounded border-bottom border-5 border-primary'
              href=''
            >
              <div className='service-icon bg-transparent border rounded mb-4 p-1'>
                <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                  <i className='fa fa-spa fa-2x text-primary'></i>
                </div>
              </div>
              <h5 className='mb-3'>Parking gratuit</h5>
              <p className='text-body mb-0'>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-delay='0.4s'
            style={{
              visibility: 'visible',
              animationDelay: '0.4s',
              animationName: 'fadeInUp'
            }}
          >
            <a
              className='service-item rounded border-bottom border-5 border-primary'
              href=''
            >
              <div className='service-icon bg-transparent border rounded mb-4 p-1'>
                <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                  <i className='fa fa-users fa-2x text-primary'></i>
                </div>
              </div>
              <h5 className='mb-3'>Salle de reunion</h5>
              <p className='text-body mb-0'>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-delay='0.5s'
            style={{
              visibility: 'visible',
              animationDelay: '0.5s',
              animationName: 'fadeInUp'
            }}
          >
            <a
              className='service-item rounded border-bottom border-5 border-primary'
              href=''
            >
              <div className='service-icon bg-transparent border rounded mb-4 p-1'>
                <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                  <i className='fa fa-glass-cheers fa-2x text-primary'></i>
                </div>
              </div>
              <h5 className='mb-3'>Salle de fete</h5>
              <p className='text-body mb-0'>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-delay='0.6s'
            style={{
              visibility: 'visible',
              animationDelay: '0.6s',
              animationName: 'fadeInUp'
            }}
          >
            <a
              className='service-item rounded border-bottom border-5 border-primary'
              href=''
            >
              <div className='service-icon bg-transparent border rounded mb-4 p-1'>
                <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                  <i className='fa fa-dumbbell fa-2x text-primary'></i>
                </div>
              </div>
              <h5 className='mb-3'>GYM &amp; Yoga</h5>
              <p className='text-body mb-0'>
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
