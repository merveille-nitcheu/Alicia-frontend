import React from 'react'

export default function Contact() {
  return (
    <div class="container-xxl py-5">
    <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title text-center text-uppercase" style={{color:'#000000'}}>Information</h6>
            <h1 class="mb-5" style={{color:'#000000'}}><span class="text-uppercase">Contactez</span> Nous</h1>
        </div>
        <div class="row g-4">
            <div class="col-12 mb-5" style={{textAlign:'center'}}>
                <div class="row gy-4">
                    <div class="col-md-4">
                        <h6 class="section-title text-start text-primary text-uppercase">Email</h6>
                        <p className="mb-0"> <i className="fa fa-envelope text-primary me-2"></i>reservation@alicia-hotel.com</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="section-title text-start text-primary text-uppercase">Telephone</h6>
                        
                        <p className="mb-0"> <i className="fa fa-phone-alt text-primary me-2"></i>+237 699 71 11 89 | 233 47 18 36</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="section-title text-start text-primary text-uppercase">Localisation</h6>
                        
                        <p className="mb-0"> <i className="fa fa-home text-primary me-2"></i>Makepe Bloc L - Derrière Tradex Parcours Vita</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe class="position-relative rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.693123924641!2d9.745417174426656!3d4.082767846705653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d1a2fbfe6fb%3A0xd3058eab3cb8400b!2sALICIA%20H%C3%94TEL!5e0!3m2!1sfr!2scm!4v1684152601864!5m2!1sfr!2scm"
                    frameborder="0" style={{minHeight: '350px',border:'0'}} allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
            </div>
            <div class="col-md-6">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Votre Nom</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Votre Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Sujet</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" style={{borderRadius:'0.6rem',color:"#000000"}} type="submit" >Envoyer Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
