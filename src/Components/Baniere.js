import React from 'react'
import slider1 from '../assets/img/slider/slider1.jpg'
import { Link } from 'react-router-dom'


export default function Baniere() {
  return (
    <div className="container-fluid py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5">
                        <h6 className="section-title text-start text-white text-uppercase mb-3">Alicia Hotel</h6>
                        <h1 className="text-white mb-4">Découvrez un hôtel de luxe de marque</h1>
                        <p className="text-white mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                            magna dolore erat amet</p>
                        <Link to="/chambres" className="btn btn-primary py-md-3 px-md-3 me-3"
                            style={{borderRadius: "0.6rem",color:"#000000"}}>Nos chambres</Link>
                        <Link to="/reservation" className="btn btn-light py-md-3 px-md-3"
                            style={{borderRadius: "0.6rem"}}>Reservez maintenant</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={slider1}/>
                </div>
            </div>
        </div>
  )
}
