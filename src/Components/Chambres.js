import React, { useEffect } from 'react'
import standard from '../assets/img/room/standard.jpg'
import luxe from '../assets/img/room/luxe.jpg'
import grandluxe from '../assets/img/room/grandluxe.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInstance'

export default function Chambres () {
  const [Chambresliste, setChambresliste] = React.useState([])

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
  const navigate = useNavigate()
  return (
    <div className='container-fluid py-5'>
      <div className='container'>
        <div
          className='text-center wow fadeInUp'
          data-wow-delay='0.1s'
          onClick={() => navigate('/chambres/details')}
        >
          <h6
            className='section-title text-center text-uppercase'
            style={{ color: '#000000' }}
          >
            Nos Chambres
          </h6>
          <h1 className='mb-5' style={{ color: '#000000' }}>
            Explorez Nos <span className='text-uppercase'>Chambres</span>
          </h1>
        </div>
        <div
          className='row mt-n2 wow fadeInUp'
          data-wow-delay='0.3s'
          style={{
            visibility: 'visible',
            animationDelay: '0.3s',
            animationName: 'fadeInUp'
          }}
        ></div>
        <div className='row g-4'>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp first'
            data-wow-delay='0.1s'
          >
            <div
              className='room-item shadow overflow-hidden zoom-on-hover'
              style={{ borderRadius: '0.6rem' }}
            >
              <div className='position-relative'>
                <img
                  className='img-fluid zoom-on-hover'
                  src={standard}
                  alt=''
                />
                <small
                  className='position-absolute start-0 top-100 translate-middle-y bg-primary rounded py-1 px-3 ms-4'
                  style={{ color: '#000000' }}
                >
                  Fcfa 20 000/Nuit
                </small>
              </div>
              <div className='p-4 mt-2'>
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className='mb-0'>Chambre Standard</h5>
                  <div className='ps-2'>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                  </div>
                </div>
                <div className='d-flex mb-3'>
                  <small className='border-end me-3 pe-3'>
                    <i className='fa fa-bed text-primary me-2'></i>2 Personnes
                  </small>

                  <small>
                    <i className='fa fa-wifi text-primary me-2'></i>Wifi
                  </small>
                </div>
                <p className='text-body mb-3'>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <div className='d-flex justify-content-center'>
                  <Link
                    className='btn btn-sm btn-dark  py-2 px-4'
                    style={{ width: '250px' }}
                    to='/chambres/details'
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-delay='0.6s'
            onClick={() => navigate('/chambres/details')}
          >
            <div
              className='room-item shadow overflow-hidden zoom-on-hover'
              style={{ borderRadius: '0.6rem' }}
            >
              <div className='position-relative'>
                <img className='img-fluid zoom-on-hover' src={luxe} alt='' />
                <small
                  className='position-absolute start-0 top-100 translate-middle-y bg-primary rounded py-1 px-3 ms-4'
                  style={{ color: '#000000' }}
                >
                  Fcfa 25 000/Nuit
                </small>
              </div>
              <div className='p-4 mt-2'>
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className='mb-0'>Chambre de Luxe</h5>
                  <div className='ps-2'>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                  </div>
                </div>
                <div className='d-flex mb-3'>
                  <small className='border-end me-3 pe-3'>
                    <i className='fa fa-bed text-primary me-2'></i>2 Personnes
                  </small>

                  <small>
                    <i className='fa fa-wifi text-primary me-2'></i>Wifi
                  </small>
                </div>
                <p className='text-body mb-3'>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <div className='d-flex justify-content-center'>
                  <Link
                    className='btn btn-sm btn-dark  py-2 px-4'
                    style={{ width: '250px' }}
                    to='/chambres/details'
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp second'
            data-wow-delay='0.3s'
            onClick={() => navigate('/chambres/details')}
          >
            <div
              className='room-item shadow overflow-hidden zoom-on-hover'
              style={{ borderRadius: '0.6rem' }}
            >
              <div className='position-relative'>
                <img
                  className='img-fluid zoom-on-hover'
                  src={grandluxe}
                  alt=''
                />
                <small
                  className='position-absolute start-0 top-100 translate-middle-y bg-primary rounded py-1 px-3 ms-4'
                  style={{ color: '#000000' }}
                >
                  Fcfa 35 000/Nuit
                </small>
              </div>
              <div className='p-4 mt-2'>
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className='mb-0'>Chambre Grand Luxe</h5>
                  <div className='ps-2'>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                    <small className='fa fa-star text-primary'></small>
                  </div>
                </div>
                <div className='d-flex mb-3'>
                  <small className='border-end me-3 pe-3'>
                    <i className='fa fa-bed text-primary me-2'></i>2 Personnes
                  </small>

                  <small>
                    <i className='fa fa-wifi text-primary me-2'></i>Wifi
                  </small>
                </div>
                <p className='text-body mb-3'>
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <div className='d-flex justify-content-center'>
                  <Link
                    className='btn btn-sm btn-dark  py-2 px-4'
                    style={{ width: '250px' }}
                    to='/chambres/details'
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
