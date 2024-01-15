import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import dayjs from 'dayjs'
import EventIcon from '@mui/icons-material/Event';

export default function Reservation ({ onClick }) {
  const [nbChambres, setNbChambres] = useState(1)

  const handleNbChambresChange = event => {
    const selectedNbChambres = parseInt(event.target.value)
    setNbChambres(selectedNbChambres)
  }

  const renderInputReserves = () => {
    const inputReserves = []
    for (let i = 0; i < nbChambres; i++) {
      inputReserves.push(
        <div className='row mt-3 inputReserve' id={`inputReserve-${i}`} key={i}>
          <div className='col-4'>
            <select className='form-select'>
              <option selected>Type de chambre</option>
              <option value='1'>Standard</option>
              <option value='2'>Luxe</option>
              <option value='3'>Grand luxe</option>
            </select>
          </div>
          <div className='col-4'>
            <select className='form-select'>
              <option selected>Adultes</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='3'>4</option>
              <option value='3'>5</option>
              <option value='3'>6</option>
              <option value='3'>7</option>
              <option value='3'>8</option>
              <option value='3'>9</option>
            </select>
          </div>
          <div className='col-4'>
            <select className='form-select'>
              <option selected>Enfants</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='3'>4</option>
              <option value='3'>5</option>
              <option value='3'>6</option>
              <option value='3'>7</option>
              <option value='3'>8</option>
              <option value='3'>9</option>
            </select>
          </div>
        </div>
      )
    }
    return inputReserves
  }

 

  const [dateArrivee, setDateArrivee] = useState(dayjs())
  const [dateDepart, setDateDepart] = useState(null)

  const handleDateArriveeChange = date => {
    setDateArrivee(date)
  }

  const handleDateDepartChange = date => {
    setDateDepart(date)
  }

  return (
    <div className='row g-3 py-4 pt-2 px-0 px-sm-4'>
      <div className='col-12 col-sm-6'>
        <div className='date' id='date3' data-target-input='nearest'>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            className='custom-div'
          >
            <MobileDatePicker
              label="Date d'arrivée"
              format='DD/MM/YYYY'
              minDate={dayjs()}
              value={dateArrivee}
              onChange={handleDateArriveeChange}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className='col-12 col-sm-6'>
        <div className='date' id='date4' data-target-input='nearest'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label='Date de depart'
              value={dateDepart}
              onChange={handleDateDepartChange}
              format='DD/MM/YYYY'
              minDate={dateArrivee ? dateArrivee : ''}
                  InputProps={{
                endAdornment: (
                  
                    <EventIcon />
                  
                ),
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className='col-12 col-sm-6'>
        <div className='date' id='date4' data-target-input='nearest'>
          <input
            type='text'
            className='form-control datetimepicker-input'
            placeholder="Heure d'arrivée"
            data-target='#date4'
            data-toggle='datetimepicker'
          />
        </div>
      </div>
      <div className='col-12 col-sm-6'>
      <input className='form-control' onChange={handleNbChambresChange} placeholder='Nbre de chambre' type='text'/>
      </div>

      <div className='col-12 mt-3 inputReserve' id='inputReserve'>
        {renderInputReserves()}
      </div>

      <div className='col-12'>
        <button
          className='btn py-3 w-100 text-white'
          style={{ borderRadius: '0.6rem', backgroundColor: '#003b95' }}
          onClick={onClick}
        >
          Verifiez Disponibilité
        </button>
      </div>
    </div>
  )
}
