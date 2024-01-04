import React from 'react'



export default function Entete ({image,titre,type}) {
  return (
    <div className='container-fluid p-0 mb-5'>
      <div className='container-fluid page-header mb-5 p-0' style={{backgroundImage: `url(${image})`}}>
    
        <div className='container-fluid page-header-inner py-5'>
          <div className='container text-center pb-5'>
            <h1 className='display-3 text-white mb-3 animated slideInDown'>
              {type}
            </h1>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb justify-content-center text-uppercase'>
                <li className='breadcrumb-item'>
                  <a href='#'>Accueil</a>
                </li>
                <li className='breadcrumb-item'>
                  <a href='#'>Pages</a>
                </li>
                <li
                  className='breadcrumb-item text-white active'
                  aria-current='page'
                >
                  {titre}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
