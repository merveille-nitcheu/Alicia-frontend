import React from 'react'
import logo from '../assets/img/logo.png'
import { NavLink,Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
       <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="row justify-content-center">
                <div className="col-lg-10 border rounded p-1">
                    <div className="border rounded text-center p-1">
                        <div className="bg-white rounded text-center p-5">
                            <h4 className="mb-4">Souscrivez à notre  <span
                                    className="text-primary text-uppercase">Newsletter</span></h4>
                            <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                                <input className="form-control w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Enter your email"/>
                                <button type="button"
                                    className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2" style={{ color: '#000000' }}>Soumettre</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <div className="">
                        
                            <h4 className="section-title text-start text-primary text-uppercase mb-4 ms-2">Alicia Hotel</h4>
                            <img src={logo} style={{height:"130px",paddingLeft:"60px",paddingBlock:"13px"}}
                            alt="logo"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="section-title text-start text-primary text-uppercase mb-4 me-2">Contact</h6>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Makepe Bloc L - Derrière Tradex Parcours Vita</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+237 699 71 11 89 | 233 47 18 36</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>reservation@alicia-hotel.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="https://twitter.com/AliciaHotel" target="_blank"><i
                                    className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/aliciahotelcm" target="_blank"><i
                                    className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/aliciahotelcm/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/alicia-hotel-50925728b/" target="_blank"><i
                                    className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <Link to="/a-propos" className="btn btn-link" >A Propos de nous</Link>
                                <Link to="/contact" className="btn btn-link" >Contactez-nous</Link>
                                <Link to="/chambres" className="btn btn-link">Nos Chambres</Link>
                                <Link to="/reservation" className="btn btn-link">Reservation</Link>
                                <a className="btn btn-link" href="">Support</a>
                            </div>
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <a className="btn btn-link" href="">Restaurant</a>
                                <a className="btn btn-link" href="">Chambres climatisées</a>
                                <a className="btn btn-link" href="">Parking gratuit</a>
                                <a className="btn btn-link" href="">Salle de reunion</a>
                                <a className="btn btn-link" href="">Salle de fete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            Copyright &copy; 2023 Alicia Hotel.
                            Designed By <a className="" href="https://htmlcodex.com">ITSOLUTION</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Accueil</a>
                                <a href="">Chambres</a>
                                <a href="">Reservation</a>
                                <a href="">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
