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
import ReactPaginate from 'react-paginate'

export default function ChambresDispo ({ onClick }) {
  const [Chambresliste, setChambresliste] = React.useState([])
  const [standardChambres, setStandardChambres] = React.useState([])
  const [luxeChambres, setLuxeChambres] = React.useState([])
  const [grandluxeChambres, setGrandLuxeChambres] = React.useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [currentStandardPage, setCurrentStandardPage] = useState(0)
  const [currentLuxePage, setCurrentLuxePage] = useState(0)
  const [currentGrandLuxePage, setCurrentGrandLuxePage] = useState(0)
  const [totalchambresPages, setTotalChambresPages] = useState(0)
  const [totalstandardPages, setTotalStandardPages] = useState(0)
  const [totalluxePages, setTotalLuxePages] = useState(0)
  const [totalgrandluxePages, setTotalGrandluxePages] = useState(0)
  const itemsPerPage = 3

  useEffect(() => {
    axiosInstance
      .get('rest/room-list')
      .then(response => {
        const data = response.data

        setChambresliste(data)
        setTotalChambresPages(Math.ceil(data.length / itemsPerPage))
      })

      .catch(error => {
        console.log(error)
      })
  }, [Chambresliste])

  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const filteredStandardChambres = Chambresliste.filter(
      chambre => chambre.cataloque.toLowerCase() === 'confort'
    )
    setStandardChambres(filteredStandardChambres)
    setTotalStandardPages(
      Math.ceil(filteredStandardChambres.length / itemsPerPage)
    )
  }, [standardChambres])

  useEffect(() => {
    const filteredluxeChambres = Chambresliste.filter(
      chambre => chambre.cataloque.toLowerCase() === 'luxe'
    )
    setLuxeChambres(filteredluxeChambres)
    setTotalLuxePages(Math.ceil(filteredluxeChambres.length / itemsPerPage))
  }, [luxeChambres])

  useEffect(() => {
    const filteregrandluxeChambres = Chambresliste.filter(
      chambre => chambre.cataloque.toLowerCase() === 'grandluxe'
    )
    setGrandLuxeChambres(filteregrandluxeChambres)
    setTotalGrandluxePages(
      Math.ceil(filteregrandluxeChambres.length / itemsPerPage)
    )
  }, [grandluxeChambres])

  function getSubset (data, currentPage, itemsPerPage) {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const subset = data.slice(startIndex, endIndex)
    return subset
  }

  const currentDataChambres = getSubset(
    Chambresliste,
    currentPage,
    itemsPerPage
  )
  const currentDataStandard = getSubset(
    standardChambres,
    currentStandardPage,
    itemsPerPage
  )
  const currentDataLuxe = getSubset(luxeChambres, currentLuxePage, itemsPerPage)
  const currentDataGrandLuxe = getSubset(
    grandluxeChambres,
    currentGrandLuxePage,
    itemsPerPage
  )

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected)
  }
  const handlePageStandardChange = selectedPage => {
    setCurrentStandardPage(selectedPage.selected)
  }
  const handlePageLuxeChange = selectedPage => {
    setCurrentLuxePage(selectedPage.selected)
  }
  const handlePageGrandLuxeChange = selectedPage => {
    setCurrentGrandLuxePage(selectedPage.selected)
  }

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
            {currentDataChambres?.map(room => (
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
                <nav aria-label='Page navigation'>
                  <ul className='pagination justify-content-center m-0 d-flex'>
                    <ReactPaginate
                      onPageChange={handlePageChange}
                      forcePage={currentPage}
                      containerClassName={'d-flex gap-4'}
                      previousPage="<<"
                  nextPage=">>"
                    />
                  </ul>
                </nav>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='2'>
            {currentDataStandard?.map(room => (
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
                <nav aria-label='Page navigation'>
                  <ul className='pagination justify-content-center m-0 d-flex'>
                    <ReactPaginate
                      pageCount={1}
                      onPageChange={handlePageStandardChange}
                      forcePage={currentStandardPage}
                      containerClassName={'d-flex gap-4'}
                    />
                  </ul>
                </nav>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='3'>
            {currentDataLuxe?.map(room => (
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
                <nav aria-label='Page navigation'>
                  <ul className='pagination justify-content-center m-0 d-flex'>
                    <ReactPaginate
                      pageCount={1}
                      onPageChange={handlePageLuxeChange}
                      forcePage={currentLuxePage}
                      containerClassName={'d-flex gap-4'}
                    />
                  </ul>
                </nav>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='4'>
            {currentDataGrandLuxe?.map(room => (
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
                <nav aria-label='Page navigation'>
                  <ul className='pagination justify-content-center m-0 d-flex'>
                    <ReactPaginate
                    pageCount={1}
                      onPageChange={handlePageGrandLuxeChange}
                      forcePage={currentGrandLuxePage}
                      containerClassName={'d-flex gap-4'}
                    />
                  </ul>
                </nav>
              </div>
            </div>
          </TabPanel>
        </div>
      </TabContext>
    </div>
  )
}
