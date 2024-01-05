import React, { useState } from 'react'
import Reservation from './Reservation'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import ChambresDispo from './ChambresDispo'

export default function ProcessReservation () {
  const steps = [
    'Choisir la date',
    'Choisir la chambre',
  ]
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Reservation onClick={handleclickReservation}/>;
      case 1:
        return <ChambresDispo onClick={handleclickReservation}/>;
      default:
        return null;
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleclickReservation = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

 
  return (
    <div className='container py-5'>
      <div className='text-center wow fadeInUp' data-wow-delay='0.1s'>
        <h6
          className='section-title text-center text-uppercase'
          style={{ color: '#000000' }}
        >
          Reservation
        </h6>
        <h1 className='mb-5' style={{ color: '#000000' }}>
          Effectuer votre reservation
        </h1>
      </div>
      <div className='container mx-0 mx-md-5'>
        <div
          className=' mb-5 wow fadeInUp p-3'
          data-wow-delay='0.1s'
          style={{
            visibility: 'visible',
            animationDelay: '0.1s',
            animationName: 'fadeInUp'
          }}
        >
          <div
            className='border-bottom text-center bg-primary px-0 py-2 mb-3 px-sm-3 mx-0 mx-md-5 py-sm-4'
            style={{ borderRadius: '0.6rem' }}
          >
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {}
                const labelProps = {}
                
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>
                      {' '}
                      <span
                        className='align-middle fs-6 fs-sm-5 lh-sm fw-sm-bold'
                        style={{ color: '#000000' }}
                      >
                        {' '}
                        {label}{' '}
                      </span>
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </div>
          <div className='row border-top text-center py-xxl-3 mx-0 mx-md-5'>
            <div className='col-12 col-sm-1'></div>
            <div className='col-12 col-sm-10'>

    
            {getStepContent(activeStep)}
            </div>
            
            <div className='col-12 col-sm-1'></div>
          </div>
        </div>

    
      </div>
    </div>
  )
}
