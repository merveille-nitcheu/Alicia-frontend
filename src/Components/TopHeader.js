import React from 'react'
import logo from '../assets/img/logo.png'
import { NavLink,Link } from 'react-router-dom'
export default function TopHeader() {
  return (
    <div>

<div className="container-fluid px-0">
            <div className="row bg-dark d-none d-lg-flex py-auto" style={{paddingInline:'8%'}}>
                <div className="col-lg-10 px-5 text-start">
                    <div className="h-150 d-inline-flex align-items-center py-3 me-5">
                        <i className="fa fa-envelope text-primary me-2"></i>
                        <p className="mb-0 text-white">reservation@alicia-hotel.com</p>
                    </div>
                    <div className="h-150 d-inline-flex align-items-center py-3 me-5">
                        <i className="fa fa-phone-alt text-primary me-2"></i>
                        <p className="mb-0 text-white">+237 699 71 11 89 | 233 47 18 36</p>
                    </div>
                    <div className="h-150 d-inline-flex align-items-center py-3">
                        <i className="fa fa-home text-primary me-2"></i>
                        <p className="mb-0 text-white">Makepe Bloc L - Derrière Tradex Parcours Vita</p>
                    </div>
                </div>
                <div className="col-lg-2 px-5 text-end">
                    <div className="d-inline-flex align-items-center py-3">
                        <a className="me-3" href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a className="me-3" href="" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a className="me-3" href="" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                        <a className="" href="https://wa.me/"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div style={{paddingInline:'8%'}}>
                <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0"
                    style={{top:'-100px',paddingInline:'15%'}}>
                    <NavLink to="/">
                        <img src={logo} style={{height:"130px",paddingLeft:"50px",paddingBlock:'15px'}} alt="logo"/>
                    </NavLink>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto p-4 p-lg-0 ">

                            <NavLink to="/" className="nav-item nav-link">Accueil</NavLink>
                            <span className="border border-left-1 d-none d-sm-inline border-primary"
                                style={{height:'22px',marginInline:"8px",marginTop:'8.5px'}}></span>
                            <NavLink to="/chambres" className="nav-item nav-link">Chambres</NavLink>
                            <span className="border border-left-1 d-none d-sm-inline border-primary"
                                style={{height:'22px',marginInline:"8px",marginTop:'8.5px'}}></span>
                            <NavLink to="/reservation" className="nav-item nav-link">Reservation</NavLink>
                            <span className="border border-left-1 d-none d-sm-inline border-primary"
                               style={{height:'22px',marginInline:"8px",marginTop:'8.5px'}}></span>
                            <NavLink to="/a-propos" className="nav-item nav-link">A Propos </NavLink>
                            <span className="border border-left-1 d-none d-sm-inline border-primary"
                                style={{height:'22px',marginInline:"8px",marginTop:'8.5px'}}></span>
                            <NavLink to="/contact" className="nav-item nav-link">Contactez-nous</NavLink>
                        </div>


                        <Link to="/reservation"
                            className="btn btn-primary py-3 px-4 d-none d-lg-block"
                            style={{borderRadius: '0.6rem'}}>Reservez Maintenant <i className="fa fa-arrow-right ms-3"></i>
                        </Link>



                    </div>
                </nav>
            </div>


        </div>
      
    </div>
  )
}
