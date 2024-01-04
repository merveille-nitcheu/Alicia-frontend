import React from 'react'
import { Link } from 'react-router-dom'

export default function ChambresDispo() {
  return (
    <div>
    <div
              className='row room-item m-0 mb-4 wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div
                className='col-md-5 col-lg-12 col-xl-5 p-0'
                style={{ minHeight: '300px' }}
              >
                <div className='position-relative h-100'>
                  <img
                    className='position-absolute w-100 h-100'
                    src='img/room-1.jpg'
                    alt=''
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className='col-md-7 col-lg-12 col-xl-7 h-100 px-0'>
                <div className='p-4'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <small className='bg-primary text-white rounded py-1 px-3'>
                      $100/Night
                    </small>
                    <div className='ps-2'>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                    </div>
                  </div>
                  <h5 className='mb-3'>Junior Suite</h5>
                  <div className='d-flex mb-3'>
                    <small className='border-end me-3 pe-3'>
                      <i className='fa fa-bed text-primary me-2'></i>3 Bed
                    </small>
                    <small className='border-end me-3 pe-3'>
                      <i className='fa fa-bath text-primary me-2'></i>2 Bath
                    </small>
                    <small>
                      <i className='fa fa-wifi text-primary me-2'></i>Wifi
                    </small>
                  </div>
                  <p className='text-body mb-0'>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                </div>
                <div className='d-flex justify-content-between border-top mt-auto p-4'>
                  <Link
                    className='btn btn-sm btn-dark rounded py-2 px-4'
                    to='/chambres/details'
                  >
                    voir les détails
                  </Link>
                  
                </div>
              </div>
            </div>
            <div
              className='row room-item m-0 mb-4 wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div
                className='col-md-5 col-lg-12 col-xl-5 p-0'
                style={{ minHeight: '300px' }}
              >
                <div className='position-relative h-100'>
                  <img
                    className='position-absolute w-100 h-100'
                    src='img/room-1.jpg'
                    alt=''
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className='col-md-7 col-lg-12 col-xl-7 h-100 px-0'>
                <div className='p-4'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <small className='bg-primary text-white rounded py-1 px-3'>
                      $100/Night
                    </small>
                    <div className='ps-2'>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                      <small className='fa fa-star text-primary'></small>
                    </div>
                  </div>
                  <h5 className='mb-3'>Junior Suite</h5>
                  <div className='d-flex mb-3'>
                    <small className='border-end me-3 pe-3'>
                      <i className='fa fa-bed text-primary me-2'></i>3 Bed
                    </small>
                    <small className='border-end me-3 pe-3'>
                      <i className='fa fa-bath text-primary me-2'></i>2 Bath
                    </small>
                    <small>
                      <i className='fa fa-wifi text-primary me-2'></i>Wifi
                    </small>
                  </div>
                  <p className='text-body mb-0'>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet.
                  </p>
                </div>
                <div className='d-flex justify-content-between border-top mt-auto p-4'>
                  <Link
                    className='btn btn-sm btn-dark rounded py-2 px-4'
                    to='/chambres/details'
                  >
                    Voir les détails
                  </Link>
                  
                </div>
              </div>
            </div>
            <div
              className='row wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='col-12'>
                <nav aria-label='Page navigation'>
                  <ul className='pagination justify-content-center m-0'>
                    <li className='page-item disabled'>
                      <a
                        className='page-link rounded-0'
                        href='#'
                        aria-label='Previous'
                      >
                        <span aria-hidden='true'>
                          <i className='bi bi-arrow-left'></i>
                        </span>
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a
                        className='page-link rounded-0'
                        href='#'
                        aria-label='Next'
                      >
                        <span aria-hidden='true'>
                          <i className='bi bi-arrow-right'></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
      
    </div>
  )
}
