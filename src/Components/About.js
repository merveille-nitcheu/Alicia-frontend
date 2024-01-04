import React from 'react'
import slider3 from "../assets/img/slider/slider3.jpg"
import img2 from "../assets/img/slider/img2.jpg"
import slider11 from "../assets/img/slider/slider11.jpg"
import reunion from "../assets/img/fin/reunion.jpg"
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-uppercase" style={{color:'#000000'}}>A Propos de Nous</h6>
                        <h1 className="mb-4" style={{color:'#000000'}}>Bienvenue chez <span className="text-uppercase">Alicia
                                Hotel</span></h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                            diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                            dolore erat amet</p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4 text-primary">
                                        <i className="fa fa-hotel fa-2x  mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">40</h2>
                                        <p className="mb-0">Chambres</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4 text-primary">
                                        <i className="fa fa-users-cog fa-2x mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">20</h2>
                                        <p className="mb-0">Personnels</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4 text-primary">
                                        <i className="fa fa-users fa-2x  mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="btn btn-primary py-3 px-5 mt-2" style= {{borderRadius:'0.6rem'}} to="/a-propos">En
                            Savoir Plus</Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-80 h-80 wow zoomIn" data-wow-delay="0.1s"
                                    src={slider3} style={{marginTop: "25%"}}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 h-100 wow zoomIn" data-wow-delay="0.3s"
                                    src={img2}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 h-75 wow zoomIn" data-wow-delay="0.5s"
                                    src={slider11}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s"
                                    src={reunion}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
