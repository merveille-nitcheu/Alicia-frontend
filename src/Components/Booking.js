import React from 'react'

export default function Booking() {
  return (
    
    <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="bg-white shadow"
                    style={{paddingInline: '40px',paddingBlock:'40px',borderRadius:'0.6rem'}}>
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-2 ms-3">
                                    <div className="" id="date1" data-target-input="nearest">
                                        <input type="text" className="form-control" placeholder="Date d'arrivée"
                                            data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-md-2 ms-3">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input"
                                            placeholder="Date de depart" data-target="#date2"
                                            data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div className="col-md-2 ms-3">
                                    <select className="form-select">
                                        <option selected>Adultes</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                        <option value="3">6</option>
                                        <option value="3">7</option>
                                        <option value="3">8</option>
                                        <option value="3">9</option>
                                    </select>
                                </div>
                                <div className="col-md-2 ms-3">
                                    <select className="form-select">
                                        <option selected>Enfants</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                        <option value="3">6</option>
                                        <option value="3">7</option>
                                        <option value="3">8</option>
                                        <option value="3">9</option>
                                    </select>
                                </div>
                                <div className="col-md-2 ms-3">
                                    <select className="form-select">
                                        <option selected>Chambres</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                        <option value="3">6</option>
                                        <option value="3">7</option>
                                        <option value="3">8</option>
                                        <option value="3">9</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mb-md-0 ml-md-0" style={{marginLeft:'-50px'}}>
                            <button
                                className="btn btn-primary"style={{height:"50px",width:"250px",borderRadius:'0.6rem'}}>Verifiez
                                disponibilité <i className="fa fa-arrow-right ms-3"></i></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
      
    
  )
}
