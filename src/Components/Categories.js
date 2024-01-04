import React from 'react'
import standard from '../assets/img/room/standard.jpg'
import luxe from '../assets/img/room/luxe.jpg'
import grandluxe from '../assets/img/room/grandluxe.jpg'

export default function Categories() {
  return (
    <div
              className='bg-light p-4 mb-5 wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <h4 className='mb-4'>Categories</h4>
              <a className='d-block position-relative mb-3' href=''>
                <img
                  className='img-fluid w-100'
                  src={standard}
                  alt=''
                  style={{ height: '8rem' }}
                />
                <div
                  className='d-flex position-absolute top-0 start-0 w-100 h-100 p-3'
                  style={{ background: 'rgba(0,0,0,.3)' }}
                >
                  <h5 className='text-white m-0 mt-auto'>Standard</h5>
                </div>
              </a>
              <a className='d-block position-relative mb-3' href=''>
                <img
                  className='img-fluid w-100'
                  src={luxe}
                  alt=''
                  style={{ height: '8rem' }}
                />
                <div
                  className='d-flex position-absolute top-0 start-0 w-100 h-100 p-3'
                  style={{ background: 'rgba(0,0,0,.3)' }}
                >
                  <h5 className='text-white m-0 mt-auto'>Luxe</h5>
                </div>
              </a>
              <a className='d-block position-relative' href=''>
                <img
                  className='img-fluid w-100'
                  src={grandluxe}
                  alt=''
                  style={{ height: '8rem' }}
                />
                <div
                  className='d-flex position-absolute top-0 start-0 w-100 h-100 p-3'
                  style={{ background: 'rgba(0,0,0,.3)' }}
                >
                  <h5 className='text-white m-0 mt-auto'>Grand Luxe</h5>
                </div>
              </a>
            </div>
  )
}
