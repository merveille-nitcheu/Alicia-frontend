import React from 'react'
import slider4 from '../assets/img/slider/slider4.jpg'
import slider18 from '../assets/img/slider/slider18.jpg'
import slider7 from '../assets/img/slider/slider7.jpg'
import slider11 from '../assets/img/slider/slider11.jpg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    
        
        <div className="container-fluid p-0 mb-5">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 " src={slider4} alt="Image"
                            style={{height: '38rem'}}/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: '700px'}}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Alicia
                                    Hotel</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Ici c'est chez nous </h1>
                                <Link to='/chambres' className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                    style={{borderRadius: '0.6rem',color:'#000000'}}> Nos chambres </Link>
                                <Link to="/reservation" className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                                    style={{borderRadius: '0.6rem'}}>Réservez </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="w-100 " src={slider18} alt="Image"
                            style={{height: '38rem'}}/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: '700px'}}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Alicia
                                    Hotel</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Bienvenue chez chez nous
                                </h1>
                                <Link to='/chambres' className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                    style={{borderRadius: '0.6rem',color:'#000000'}}> Nos chambres </Link>
                                <Link to="/reservation" className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                                    style={{borderRadius: '0.6rem'}}>Réservez </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="w-100 " src={slider7} alt="Image"
                            style={{height: '38rem'}}/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: '700px'}}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Alicia
                                    Hotel</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Faites votre reservation
                                </h1>
                                <Link to='/chambres' className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                    style={{borderRadius: '0.6rem',color:'#000000'}}> Nos chambres </Link>
                                <Link to="/reservation" className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                                    style={{borderRadius: '0.6rem'}}>Réservez </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="w-100 " src={slider11} alt="Image"
                            style={{height: '38rem'}}/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: '700px'}}>
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Alicia
                                    Hotel</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">L'ideal pour un sejour
                                    agreable</h1>
                                    <Link to='/chambres' className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                    style={{borderRadius: '0.6rem',color:'#000000'}}> Nos chambres </Link>
                                <Link to="/reservation" className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                                    style={{borderRadius: '0.6rem'}}>Réservez </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
   


       
        
      
    </>
  )
}
