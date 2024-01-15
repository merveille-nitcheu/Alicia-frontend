import React, { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'

export default function Booking () {
  const [selectedDate, setSelectedDate] = useState(null)
  const divStyle = {
    // Autres styles
    '@media (width:1160px)': {
      marginLeft: '-50px'
    }
  }
  const [dateArrivee, setDateArrivee] = useState(dayjs())
  const [dateDepart, setDateDepart] = useState(null)

  const handleDateArriveeChange = date => {
    setDateArrivee(date)
  }

  const handleDateDepartChange = date => {
    setDateDepart(date)
  }
  console.log(window.innerWidth)
  return (
    <div
      className='container-fluid booking pb-5 wow fadeIn'
      data-wow-delay='0.1s'
    >
      <div className='container'>
        <div
          className='bg-white shadow'
          style={{
            paddingInline: '15px',
            paddingBlock: '40px',
            borderRadius: '0.6rem'
          }}
        >
          <div className='row g-2'>
            <div className='col-md-10'>
              <div className='row g-2'>
                <div className='col-md-2'>
                  <div className='' id='date1' data-target-input='nearest'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        label="Date d'arrivée"
                        format='DD/MM/YYYY'
                        size='small'
                        minDate={dayjs()}
                        value={dateArrivee}
                        onChange={handleDateArriveeChange}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className='col-md-2 ms-3'>
                  <div className='' id='date2' data-target-input='nearest'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        label='Date de Depart'
                        value={dateDepart}
                        onChange={handleDateDepartChange}
                        format='DD/MM/YYYY'
                        minDate={dateArrivee ? dateArrivee : ''}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className='col-md-2 ms-3'>
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
                <div className='col-md-2 ms-3'>
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
                <div className='col-md-2 ms-3'>
                  <select className='form-select'>
                    <option selected>Chambres</option>
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
            </div>
            <div className='col-md-2 mb-md-0 custom-div'>
              <button
                className='btn btn-primary'
                style={{
                  height: '50px',
                  width: '250px',
                  borderRadius: '0.6rem',
                  color: '#000000'
                }}
              >
                Verifiez disponibilité{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
