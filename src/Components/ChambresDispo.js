import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../axiosInstance'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import standard from '../assets/img/room/standard.jpg'
import luxe from '../assets/img/room/luxe.jpg'
import grandluxe from '../assets/img/room/grandluxe.jpg'
import usePagination from './Pagination/usePagination'
import Pagination from './Pagination/Pagination'


export default function ChambresDispo ({ onClick }) {
  const [Chambresliste, setChambresliste] = React.useState([])
  const [standardChambres, setStandardChambres] = React.useState([])
  const [luxeChambres, setLuxeChambres] = React.useState([])
  const [grandluxeChambres, setGrandLuxeChambres] = React.useState([])
  const itemsPerPage = 3

  useEffect(() => {
    axiosInstance
      .get('rest/room-list')
      .then(response => {
        const data = response.data

        setChambresliste(data)
      })

      .catch(error => {
        console.log(error)
      })
  }, [])
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const filteredStandardChambres = Chambresliste.filter(
      chambre => chambre.cataloque.toLowerCase() === 'confort'
    )
    setStandardChambres(filteredStandardChambres)
    
  }, [Chambresliste])

  useEffect(() => {
    const filteredluxeChambres = Chambresliste.filter(
      chambre => chambre.cataloque.toLowerCase() === 'luxe'
    )
    setLuxeChambres(filteredluxeChambres)
    
  }, [Chambresliste])

  useEffect(() => {
    const filteregrandluxeChambres = Chambresliste.filter(
      chambre => chambre.cataloque.toLowerCase() === 'grandluxe'
    )
    setGrandLuxeChambres(filteregrandluxeChambres)
  }, [Chambresliste])

  const {
    next: next1,
    prev: prev1,
    jump: jump1,
    currentData: currentData1,
    currentPage: currentPage1,
    maxPage: maxPage1,
    dataLength: dataLength1,
    beginItem: beginItem1,
    endItem: endItem1
  } = usePagination(Chambresliste, itemsPerPage);

  const {
    next: next2,
    prev: prev2,
    jump: jump2,
    currentData: currentData2,
    currentPage: currentPage2,
    maxPage: maxPage2,
    dataLength: dataLength2,
    beginItem: beginItem2,
    endItem: endItem2
  } = usePagination(standardChambres, itemsPerPage);

  const {
    next: next3,
    prev: prev3,
    jump: jump3,
    currentData: currentData3,
    currentPage: currentPage3,
    maxPage: maxPage3,
    dataLength: dataLength3,
    beginItem: beginItem3,
    endItem: endItem3
  } = usePagination(luxeChambres, itemsPerPage);

  const {
    next: next4,
    prev: prev4,
    jump: jump4,
    currentData: currentData4,
    currentPage: currentPage4,
    maxPage: maxPage4,
    dataLength: dataLength4,
    beginItem: beginItem4,
    endItem: endItem4
  } = usePagination(grandluxeChambres, itemsPerPage);


  return (
    <div>
      <TabContext value={value}>
        <div
          className='row room-item m-0 mb-4 wow fadeInUp'
          data-wow-delay='0.1s'
          style={{
            visibility: 'visible',
            animationDelay: '0.1s',
            animationName: 'fadeInUp'
          }}
        >
          <div className='col-12 text-center'>
            <ul className='list-inline mb-3' id='portfolio-flters'>
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
              >
                <Tab
                  label='Toutes les chambres'
                  value='1'
                  className='btn btn-outline-primary'
                />
                <Tab
                  label='Standard'
                  value='2'
                  className='btn btn-outline-primary'
                />
                <Tab
                  label='Luxe'
                  value='3'
                  className='btn btn-outline-primary'
                />
                <Tab
                  label='GrandLuxe'
                  value='4'
                  className='btn btn-outline-primary'
                />
              </TabList>
            </ul>
          </div>

          <TabPanel value='1'>
            {currentData1?.map(room => (
              <div className='row mb-5'>
                <div
                  className='col-md-5 col-lg-12 col-xl-5 p-0'
                  style={{ minHeight: '250px' }}
                >
                  <div className=' h-100'>
                    <img
                      className=' w-100 h-100'
                      src={standard}
                      alt=''
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className='col-md-7 col-lg-12 col-xl-7 h-100 px-0'>
                  <div className='p-4'>
                    <div className='d-flex align-items-center justify-content-between mb-3'>
                      <small
                        className='bg-primary rounded py-1 px-3'
                        style={{ style: '#000000' }}
                      >
                        {room.prixNuitee} FCFA
                      </small>
                      <div className='ps-2'>
                        <small className='fa fa-star text-primary'></small>
                        <small className='fa fa-star text-primary'></small>
                      </div>
                    </div>
                    <h5 className='mb-3'>{room.Intitule}</h5>
                    <div className='d-flex mb-3'>
                      <small className='border-end me-3 pe-3'>
                        <i className='fa fa-bed text-primary me-2'></i>2
                        Personnes
                      </small>
                      <small>
                        <i className='fa fa-wifi text-primary me-2'></i>Wifi
                      </small>
                    </div>
                    <p className='text-body mb-0'>
                    Nous vous proposons les chambres Standard, Luxe, et Grand luxe confortables et spacieuses toutes connectées au réseau internet haut débit.
                    </p>
                  </div>
                  <div className='d-flex justify-content-between border-top mt-auto p-4'>
                    <div
                      onClick={() => onClick(room.code)}
                      className='btn btn-sm btn-dark rounded py-2 px-4'
                    >
                      voir les détails
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className='row wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='col-12'>
              {Chambresliste?.length > itemsPerPage && (
            <Pagination
              next={next1}
              prev={prev1}
              currentData={currentData1}
              dataLength={dataLength1}
              itemsPerPage={itemsPerPage}
              beginItem={beginItem1}
              endItem={endItem1}
            />
          )}
              </div>
            </div>
          </TabPanel>
          <TabPanel value='2'>
            {currentData2?.map(room => (
              <div className='row mb-5'>
                <div
                  className='col-md-5 col-lg-12 col-xl-5 p-0'
                  style={{ minHeight: '250px' }}
                >
                  <div className=' h-100'>
                    <img
                      className=' w-100 h-100'
                      src={standard}
                      alt=''
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className='col-md-7 col-lg-12 col-xl-7 h-100 px-0'>
                  <div className='p-4'>
                    <div className='d-flex align-items-center justify-content-between mb-3'>
                      <small
                        className='bg-primary rounded py-1 px-3'
                        style={{ style: '#000000' }}
                      >
                        {room.prixNuitee} FCFA
                      </small>
                      <div className='ps-2'>
                        <small className='fa fa-star text-primary'></small>
                        <small className='fa fa-star text-primary'></small>
                      </div>
                    </div>
                    <h5 className='mb-3'>{room.Intitule}</h5>
                    <div className='d-flex mb-3'>
                      <small className='border-end me-3 pe-3'>
                        <i className='fa fa-bed text-primary me-2'></i>2
                        Personnes
                      </small>
                      <small>
                        <i className='fa fa-wifi text-primary me-2'></i>Wifi
                      </small>
                    </div>
                    <p className='text-body mb-0'>
                    Nous vous proposons les chambres Standard, Luxe, et Grand luxe confortables et spacieuses toutes connectées au réseau internet haut débit.
                    </p>
                  </div>
                  <div className='d-flex justify-content-between border-top mt-auto p-4'>
                    <div
                      onClick={onClick}
                      className='btn btn-sm btn-dark rounded py-2 px-4'
                    >
                      voir les détails
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className='row wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='col-12'>
              {standardChambres?.length > itemsPerPage && (
            <Pagination
              next={next2}
              prev={prev2}
              currentData={currentData2}
              dataLength={dataLength2}
              itemsPerPage={itemsPerPage}
              beginItem={beginItem2}
              endItem={endItem2}
            />
          )}
              </div>
            </div>
          </TabPanel>
          <TabPanel value='3'>
            {currentData3?.map(room => (
              <div className='row mb-5'>
                <div
                  className='col-md-5 col-lg-12 col-xl-5 p-0'
                  style={{ minHeight: '250px' }}
                >
                  <div className=' h-100'>
                    <img
                      className=' w-100 h-100'
                      src={luxe}
                      alt=''
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className='col-md-7 col-lg-12 col-xl-7 h-100 px-0'>
                  <div className='p-4'>
                    <div className='d-flex align-items-center justify-content-between mb-3'>
                      <small
                        className='bg-primary rounded py-1 px-3'
                        style={{ style: '#000000' }}
                      >
                        {room.prixNuitee} FCFA
                      </small>
                      <div className='ps-2'>
                        <small className='fa fa-star text-primary'></small>
                        <small className='fa fa-star text-primary'></small>
                      </div>
                    </div>
                    <h5 className='mb-3'>{room.Intitule}</h5>
                    <div className='d-flex mb-3'>
                      <small className='border-end me-3 pe-3'>
                        <i className='fa fa-bed text-primary me-2'></i>2
                        Personnes
                      </small>
                      <small>
                        <i className='fa fa-wifi text-primary me-2'></i>Wifi
                      </small>
                    </div>
                    <p className='text-body mb-0'>
                    Nous vous proposons les chambres Standard, Luxe, et Grand luxe confortables et spacieuses toutes connectées au réseau internet haut débit.
                    </p>
                  </div>
                  <div className='d-flex justify-content-between border-top mt-auto p-4'>
                    <div
                      onClick={onClick}
                      className='btn btn-sm btn-dark rounded py-2 px-4'
                    >
                      voir les détails
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className='row wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='col-12'>
              {luxeChambres?.length > itemsPerPage && (
            <Pagination
              next={next3}
              prev={prev3}
              currentData={currentData3}
              dataLength={dataLength3}
              itemsPerPage={itemsPerPage}
              beginItem={beginItem3}
              endItem={endItem3}
            />
          )}
              </div>
            </div>
          </TabPanel>
          <TabPanel value='4'>
            {currentData4?.map(room => (
              <div className='row mb-5'>
                <div
                  className='col-md-5 col-lg-12 col-xl-5 p-0'
                  style={{ minHeight: '250px' }}
                >
                  <div className='h-100'>
                    <img
                      className='w-100 h-100'
                      src={grandluxe}
                      alt=''
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className='col-md-7 col-lg-12 col-xl-7 h-100 px-0'>
                  <div className='p-4'>
                    <div className='d-flex align-items-center justify-content-between mb-3'>
                      <small
                        className='bg-primary rounded py-1 px-3'
                        style={{ style: '#000000' }}
                      >
                        {room.prixNuitee} FCFA
                      </small>
                      <div className='ps-2'>
                        <small className='fa fa-star text-primary'></small>
                        <small className='fa fa-star text-primary'></small>
                      </div>
                    </div>
                    <h5 className='mb-3'>{room.Intitule}</h5>
                    <div className='d-flex mb-3'>
                      <small className='border-end me-3 pe-3'>
                        <i className='fa fa-bed text-primary me-2'></i>2
                        Personnes
                      </small>
                      <small>
                        <i className='fa fa-wifi text-primary me-2'></i>Wifi
                      </small>
                    </div>
                    <p className='text-body mb-0'>
                    Nous vous proposons les chambres Standard, Luxe, et Grand luxe confortables et spacieuses toutes connectées au réseau internet haut débit.
                    </p>
                  </div>
                  <div className='d-flex justify-content-between border-top mt-auto p-4'>
                    <div
                      onClick={onClick}
                      className='btn btn-sm btn-dark rounded py-2 px-4'
                    >
                      voir les détails
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className='row wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: 'visible',
                animationDelay: '0.1s',
                animationName: 'fadeInUp'
              }}
            >
              <div className='col-12'>
              {grandluxeChambres?.length > itemsPerPage && (
            <Pagination
              next={next4}
              prev={prev4}
              currentData={currentData4}
              dataLength={dataLength4}
              itemsPerPage={itemsPerPage}
              beginItem={beginItem4}
              endItem={endItem4}
            />
          )}
              </div>
            </div>
          </TabPanel>
        </div>
      </TabContext>
    </div>
  )
}
