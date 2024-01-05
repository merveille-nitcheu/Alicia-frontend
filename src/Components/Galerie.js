import React, { useState } from 'react'
import Swiper from 'react-id-swiper'
import slider3 from '../assets/img/slider/slider3.jpg'
import img2 from '../assets/img/slider/img2.jpg'
import slider11 from '../assets/img/slider/slider11.jpg'
import reunion from '../assets/img/fin/reunion.jpg'

export default function Galerie () {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  }

  return (
    <div className='container d-flex'>
      <Swiper {...params}>
        <div style={{ backgroundImage: 'url(' + slider11 + ')' }} />
        <div style={{ backgroundImage: 'url(' + slider3 + ')' }} />
        <div style={{ backgroundImage: 'url(' + reunion + ')' }} />
        <div style={{ backgroundImage: 'url(' + img2 + ')' }} />
        <div style={{ backgroundImage: 'url(' + slider3 + ')' }} />
      </Swiper>
      {/* <Swiper {...params}>
        <div style={{ backgroundImage:'url(../assets/img/slider/slider3.jpg)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} />
      </Swiper> */}
    </div>
  )
}
